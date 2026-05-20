import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { Moon, Sun, Languages, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sectionIds, useActiveSection } from "@/hooks/use-active-section";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const themeBtnRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "id" : "en");
    const main = document.querySelector("main");

    if (main) {
      main.classList.remove("lang-fade");
      void (main as HTMLElement).offsetWidth;
      main.classList.add("lang-fade");
    }
  };

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    const rect = themeBtnRef.current?.getBoundingClientRect();
    const cx = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const cy = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const overlay = document.createElement("div");
    overlay.className = "theme-transition-overlay";
    overlay.style.setProperty("--tx", `${cx}px`);
    overlay.style.setProperty("--ty", `${cy}px`);
    document.body.appendChild(overlay);
    window.setTimeout(() => setTheme(next), 220);
    window.setTimeout(() => overlay.remove(), 950);
  };

  return (
    <header
      ref={mobileNavRef}
      className={cn(
        "fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-out px-4 md:px-12",
        scrolled
          ? "top-3 w-[min(96%,1300px)]"
          : "top-0 w-full max-w-none",
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between transition-all duration-500 ease-out",
          scrolled
            ? "h-14 rounded-full py-9 px-4 md:px-8 glass-strong shadow-elegant"
            : "h-16 md:h-20 rounded-none px-4 md:px-8 bg-transparent border-transparent shadow-none",
        )}
      >
        <a href="#home" className="font-bold text-base md:text-2xl tracking-tight shrink-0">
          <span className="gradient-text">rafi</span>dhp
        </a>

        <ul className="hidden lg:flex text-base md:text-2xl items-center gap-2 pb-2">
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "relative px-3 py-1 text-base transition-all duration-300",
                  "after:absolute after:left-1/2 after:-bottom-0.5 after:h-[2px]",
                  "after:w-0 after:-translate-x-1/2 after:rounded-full",
                  "after:bg-primary after:transition-all after:duration-300",
                  "hover:after:w-[70%]",
                  active === id
                    ? "text-primary after:w-[70%]"
                    : "text-shadow-white hover:text-primary",
                )}
              >
                {t(`nav.${id}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="lg"
            onClick={toggleLang}
            aria-label={t("lang.toggle")}
            className="gap-1.5 rounded-full h-9 hover:cursor-pointer"
          >
            <Languages className="h-5 w-5" />
            <span className="text-xs md:text-sm font-semibold uppercase">{i18n.language}</span>
          </Button>

          <Button
            ref={themeBtnRef}
            variant="ghost"
            size="icon-lg"
            aria-label={t("theme.toggle")}
            onClick={toggleTheme}
            className="rounded-full h-10 w-10 relative overflow-hidden hover:cursor-pointer"
          >
            <div className="relative flex items-center justify-center">
              {resolvedTheme === "dark" ? (
                <Sun className="h-6 w-6 transition-all duration-500 rotate-0 scale-100" />
              ) : (
                <Moon className="h-6 w-6 transition-all duration-500 rotate-0 scale-100" />
              )}
            </div>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full h-9 w-9 hover:cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5 transition-transform duration-300" /> : <Menu className="h-5 w-5 transition-transform duration-300" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div
          className="lg:hidden mt-2 glass-strong rounded-2xl shadow-elegant animate-fade-in"
        >
          <ul className="py-2 px-3 flex flex-col">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                      "relative block py-2 px-3 text-sm rounded-md transition-all duration-300 hover:translate-x-1",
                      "after:absolute after:left-3 after:bottom-1 after:h-[2px]",
                      "after:w-0 after:rounded-full after:bg-primary",
                      "after:transition-all after:duration-300",
                      "hover:after:w-[32px]",
                      active === id
                        ? "text-primary bg-primary/10 after:w-[32px]"
                        : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
