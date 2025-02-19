/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Projene göre yolları güncelle
  theme: {
    extend: {
      keyframes: {
        borderGlow: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        "border-glow": "borderGlow 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
