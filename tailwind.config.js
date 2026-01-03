const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "rounded-2xl",
    "rounded-3xl",
    "shadow-2xl",
    "shadow-xl",
    "ring-1",
    "ring-gray-200",
    "dark:text-ternary-light",
    "dark:text-gray-300",
    "dark:text-gray-400",
    "dark:bg-transparent",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "6rem",
        },
      },
    },
  },
  variants: {
    extend: { opacity: ["disabled"] },
  },
  plugins: ["@tailwindcss/forms"],
};
