/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ubari: {
          white: "var(--ubari-white)",
          cream: "var(--ubari-cream)",
          sand: "var(--ubari-sand)",
          ink: "var(--ubari-ink)",
          mute: "var(--ubari-mute)",
          muted: "var(--ubari-mute)",
          line: "var(--ubari-line)",
          gold: "var(--ubari-gold)",
          bronze: "var(--ubari-bronze)",
          amber: "var(--ubari-amber)",
          forest: "var(--ubari-forest)",
          green: "var(--ubari-green)",
          "green-hover": "var(--ubari-green-hover)",
          paper: "var(--ubari-paper)",
          mist: "var(--ubari-mist)",
          warm: "var(--ubari-warm)",
          clay: "var(--ubari-clay)",
          "clay-deep": "var(--ubari-clay-deep)",
          moss: "var(--ubari-moss)",
          "moss-hover": "var(--ubari-moss-hover)",
          "line-strong": "var(--ubari-line-strong)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "75rem",
        narrow: "40rem",
        prose: "38rem",
      },
      fontSize: {
        "display-xl": [
          "clamp(2.75rem, 6vw, 4.5rem)",
          { lineHeight: "1.08", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(2.25rem, 4.5vw, 3.5rem)",
          { lineHeight: "1.12", letterSpacing: "-0.015em" },
        ],
        "display-md": [
          "clamp(1.85rem, 3.2vw, 2.75rem)",
          { lineHeight: "1.18" },
        ],
        "display-sm": [
          "clamp(1.5rem, 2.4vw, 2rem)",
          { lineHeight: "1.25" },
        ],
      },
    },
  },
  plugins: [],
};
