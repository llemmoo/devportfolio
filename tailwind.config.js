import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    heroui({
      themes: {
        "light-cream": {
          extend: "light",
          colors: {
            background: "#f2f3f4", // Much lighter brown
            foreground: "#1e1e1e", // Dark text
            navbar: "#E6E600", // Closer to background but distinguishable
            primary: {
              50: "#f7efe5",
              100: "#f6eadd",
              200: "#f2e2d4",
              300: "#e8d3c1",
              400: "#d9bfa9",
              500: "#c6a88f",
              600: "#a98d75",
              700: "#8d735e",
              800: "#705848",
              900: "#554032",
              DEFAULT: "#c6a88f",
              foreground: "#1e1e1e",
            },
            focus: "#e8d3c1", // Soft brown for focus elements
          },
        },
        "dark": {
          extend: "dark",
          colors: {
            background: "#121212", // Very dark gray
            foreground: "#e0e0e0", // Light gray text
            navbar: "#181818", // Much darker navbar
            primary: {
              DEFAULT: "#b3916f",
              foreground: "#e0e0e0",
            },
            focus: "#d4b497",
          },
        },
      },
    }),
  ],
};
