/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "clr-black": "rgba(0, 0, 0, 0.75)",
        "clr-black-a": "rgba(0, 0, 0, 0)",
        "wh-10": "#F4F4F4",
        "wh-50": "#FBFBFB",
        "wh-100": "#C9C9C9",
        "wh-300": "#939393",
        "wh-500": "#595959",
        "wh-900": "#0F0F0F",
        "accent-red": "#EA9648",
        "accent-orange": "#F6CF68",
        "accent-green": "#C2E9B4",
      },
      animation: {
        active: "active 1s ease-in-out forwards",
        reverse: "reverse 1s ease-in-out reverse",
      },
      keyframes: {
        active: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-125px)" },
        },
        reverse: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-125px)" },
        },
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
