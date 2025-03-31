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
        "purple-dark": {
          extend: "dark",
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
        },
        "yellow-dark": {
          extend: "dark",
          colors: {
            background: "#1A1A00", // Dark yellowish background
            foreground: "#FFF9C4", // Light yellow foreground
            primary: {
              50: "#665C00",
              100: "#7A6F00",
              200: "#998B00",
              300: "#B8A700",
              400: "#D7C300",
              500: "#F5DF00", // Vibrant yellow
              600: "#FFEC33",
              700: "#FFF566",
              800: "#FFFB99",
              900: "#FFFECC",
              DEFAULT: "#F5DF00",
              foreground: "#1A1A00",
            },
            focus: "#D7C300",
          },
        },
        "lime-dark": {
          extend: "dark",
          colors: {
            background: "#102A10", // Deep greenish lime
            foreground: "#D4ED92", // Light lime
            primary: {
              50: "#1B3F1B",
              100: "#235423",
              200: "#2E6A2E",
              300: "#3D8A3D",
              400: "#4EAB4E",
              500: "#60CC60", // Bright lime
              600: "#75DD75",
              700: "#9EF29E",
              800: "#C8FDC8",
              900: "#E6FFE6",
              DEFAULT: "#60CC60",
              foreground: "#102A10",
            },
            focus: "#4EAB4E",
          },
        },
        "brown-dark": {
          extend: "dark",
          colors: {
            background: "#3B2C1A", // Dark, warm brown
            foreground: "#E0C9A6", // Light brownish-beige
            primary: {
              50: "#4E3621",
              100: "#5F4227",
              200: "#73522E",
              300: "#8A6436",
              400: "#A0783F",
              500: "#B78C48", // Light brown
              600: "#CDA659",
              700: "#E0C07A",
              800: "#F3D8A0",
              900: "#FAEBCF",
              DEFAULT: "#B78C48",
              foreground: "#3B2C1A",
            },
            focus: "#A0783F",
          },
        },
      },
    }),
  ],
};
