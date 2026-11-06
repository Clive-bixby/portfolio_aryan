import type { Config } from "tailwindcss";

/**
 * Palette follows the Stitch reference (`design/DESIGN.md`):
 * warm ivory canvas, obsidian dark sections, electric cobalt / violet /
 * coral accents with acid-lime reserved for live indicators on dark surfaces.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F5",
        "ivory-deep": "#F1EEE6",
        ink: "#171B28",
        muted: "#525866",
        hairline: "#E6E2DA",
        obsidian: "#0A0E1A",
        "obsidian-card": "#141A28",
        "obsidian-panel": "#1E2538",
        "dark-muted": "#94A3B8",
        cobalt: "#1D4ED8",
        "cobalt-bright": "#2563EB",
        "cobalt-deep": "#1E3A8A",
        violet: "#7C3AED",
        "violet-bright": "#8B5CF6",
        coral: "#EA580C",
        "coral-bright": "#F97316",
        "coral-deep": "#C2410C",
        lime: "#84CC16",
        "lime-bright": "#A3E635"
      },
      boxShadow: {
        card: "4px 4px 0px 0px #171B28",
        "card-lg": "6px 6px 0px 0px #171B28",
        "card-xl": "8px 8px 0px 0px #171B28",
        "card-cobalt": "6px 6px 0px 0px #1D4ED8",
        "card-cobalt-lg": "8px 8px 0px 0px #1D4ED8",
        "card-violet": "4px 4px 0px 0px #712AE2"
      },
      fontFamily: {
        display: ["var(--font-syne)", "Syne", "sans-serif"],
        sans: ["var(--font-grotesk)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"]
      },
      letterSpacing: {
        display: "-0.04em",
        tightest: "-0.03em"
      }
    }
  },
  plugins: []
};

export default config;
