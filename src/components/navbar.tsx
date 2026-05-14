import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { Moon, Sun, Languages, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sectionIds, useActiveSection } from "@/hooks/use-active-section";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const themeBtnRef = useRef<HTMLButtonElement>(null);

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
      // force reflow to restart animation
      void (main as HTMLElement).offsetWidth;
      main.classList.add("lang-fade");
    }
  };

  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const rect = themeBtnRef.current?.getBoundingClientRect();
    const cx = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const cy = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const overlay = document.createElement("div");
    overlay.className = "theme-transition-overlay";
    overlay.style.setProperty("--tx", `${cx}px`);
    overlay.style.setProperty("--ty", `${cy}px`);
    document.body.appendChild(overlay);
    // Switch theme mid-sweep so colors swap behind the expanding circle
    window.setTimeout(() => setTheme(next), 220);
    window.setTimeout(() => overlay.remove(), 950);
  };

  return (
    <header
      className={cn(
        "fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-out",
        scrolled
          ? "top-3 w-[min(96%,1100px)]"
          : "top-0 w-full max-w-none",
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between transition-all duration-500 ease-out",
          scrolled
            ? "h-14 rounded-full px-4 md:px-6 glass-strong shadow-elegant"
            : "h-16 md:h-20 rounded-none px-4 md:px-8 bg-transparent border-transparent shadow-none",
        )}
      >
        <a href="#home" className="font-bold text-base tracking-tight shrink-0">
          <span className="gradient-text">RP.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-full transition-smooth",
                  active === id
                    ? "text-primary bg-primary/10 shadow-[0_0_18px_-6px_hsl(var(--primary)/0.6)]"
                    : "text-muted-foreground hover:text-primary",
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
            size="sm"
            onClick={toggleLang}
            aria-label={t("lang.toggle")}
            className="gap-1.5 rounded-full h-9"
          >
            <Languages className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase">{i18n.language}</span>
          </Button>

          <Button
            ref={themeBtnRef}
            variant="ghost"
            size="icon"
            aria-label={t("theme.toggle")}
            onClick={toggleTheme}
            className="rounded-full h-9 w-9 relative overflow-hidden"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full h-9 w-9"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mt-2 glass-strong rounded-2xl shadow-elegant animate-fade-in">
          <ul className="py-2 px-3 flex flex-col">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block py-2 px-3 text-sm rounded-md transition-smooth",
                    active === id ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary",
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
