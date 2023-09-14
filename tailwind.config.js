/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        dark: "hsl(var(--color-dark-slate) / <alpha-value>)",
        charcoal: "hsl(var(--color-charcoal-grey) / <alpha-value>)",
        secondary: "hsl(var(--color-grey) / <alpha-value>)",
        white: "hsl(var(--color-white) / <alpha-value>)",
      },
      fontFamily: {
        primary: ["Roboto-Bold", "sans-serif"],
        secondary: ["Roboto-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
