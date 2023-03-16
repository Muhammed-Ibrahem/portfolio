/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ["DM Sans"],
        Poppins: ["Poppins"],
      },
      colors: {
        HeroHeading: "hsl(var(--HeroHeading) / <alpha-value>)",
        CardBg: "hsl(var(--CardBg) / <alpha-value>)",
        SolidHeading: "hsl(var(--SolidHeading) / <alpha-value>)",
        DarkContent: "hsl(var(--DarkContent) / <alpha-value>)",
        SolidHeadingDarkMode:
          "hsl(var(--SolidHeadingDarkMode) / <alpha-value>)",
        LightContent: "hsl(var(--LightContent) / <alpha-value>)",
        ButtonText: "hsl(var(--ButtonText) / <alpha-value>)",
        ButtonSuccess: "hsl(var(--ButtonSuccess) / <alpha-value>)",
        GradientStart: "hsl(var(--GradientStart) / <alpha-value>)",
        GradientEnd: "hsl(var(--GradientEnd) / <alpha-value>)",
        DarkMode: "hsl(var(--DarkMode) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
