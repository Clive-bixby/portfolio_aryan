"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="focus-ring group relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border-soft bg-surface/75 text-foreground shadow-glow backdrop-blur transition hover:border-tertiary/60 hover:bg-surface-high hover:text-tertiary"
    >
      <span
        className={`absolute transition duration-300 ease-out ${
          mounted && isDark ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-90 opacity-0"
        }`}
      >
        <Moon size={17} />
      </span>
      <span
        className={`absolute transition duration-300 ease-out ${
          mounted && !isDark ? "scale-100 rotate-0 opacity-100" : "scale-75 rotate-90 opacity-0"
        }`}
      >
        <Sun size={17} />
      </span>
      <span className="absolute inset-0 rounded-full opacity-0 ring-1 ring-tertiary/35 transition group-hover:opacity-100" />
    </button>
  );
}
