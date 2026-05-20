import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { sectionIds, useActiveSection } from "@/hooks/use-active-section";

export default function ScrollNav() {
  const activeSection = useActiveSection();
  const active = sectionIds.indexOf(activeSection);
  const visible = active > 0;

  const goTo = (i: number) => {
    const id = sectionIds[Math.max(0, Math.min(sectionIds.length - 1, i))];
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3 transition-all duration-500",
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6 pointer-events-none",
      )}
    >
      <button
        onClick={() => goTo(active - 1)}
        aria-label="Scroll up"
        className="w-9 h-9 rounded-full glass-strong flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-smooth hover:cursor-pointer"
      >
        <ChevronUp className="h-4 w-4" />
      </button>

      <div className="flex flex-col items-center gap-2 py-2">
        {sectionIds.map((id, i) => (
          <button
            key={id}
            onClick={() => goTo(i)}
            aria-label={`Go to ${id}`}
            className={cn(
              "rounded-full transition-all duration-300",
              i === active
                ? "w-2 h-6 bg-primary shadow-glow"
                : "w-2 h-2 bg-foreground/30 hover:bg-foreground/60 hover:cursor-pointer",
            )}
          />
        ))}
      </div>

      <button
        onClick={() => goTo(active + 1)}
        aria-label="Scroll down"
        className="w-9 h-9 rounded-full glass-strong flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-smooth hover:cursor-pointer"
      >
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  )
}