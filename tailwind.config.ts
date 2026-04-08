import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "425px",
      // => @media (min-width: 425px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      "utile-display": "utile-display, sans-serif",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        lg: "24px",
        // xl: "5rem",
        // "2xl": "6rem",
      },
    },
    // use to inject additional custom classes
    extend: {
      height: {
        screen: "100dvh", // dynamic verticle height (better the vh in mobile screen)
      },
      colors: {
        "primary-gold": "#C9B49A",
        "off-white": "#F8F8F8",
        "light-gray": "#E1E1E1",
      },
      animation: {
        "spin-slow": "spin 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
