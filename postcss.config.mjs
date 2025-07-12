const config = {
  plugins: ["@tailwindcss/postcss"],
  darkMode: "class", // enable dark mode via class
  theme: {
    extend: {
      colors: {
        base: "var(--color-base)",
        text: "var(--color-text)",
      },
    },
  },
  plugins: [],
};
