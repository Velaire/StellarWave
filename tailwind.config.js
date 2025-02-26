/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}', // Ensure TailwindCSS scans your Vue files
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        darkBlue: "#1a202c",
        darkPurple: "#4b0082",
        deepPurple: "#2d0047",
        midPurple: "#6a0dad",
        lightPurple: "#9370db",
        gold: "#ffae00",
        darkGold: "#d99000",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        fadeInRight: "fadeInRight 1s ease-in-out",
        fadeInLeft: "fadeInLeft 1s ease-in-out",
        zoomIn: "zoomIn 1s ease-in-out",
        cursor: "cursorAnimation 1s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInRight: {
          "0%": { transform: "translateX(-50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fadeInLeft: {
          "0%": { transform: "translateX(50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        zoomIn: {
          "0%": { transform: "scale(0.8)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        cursorAnimation: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "currentColor" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(138, 43, 226, 0.6)",
        button: "0 0 15px rgba(138, 43, 226, 0.5)",
        hover: "0 10px 25px rgba(138, 43, 226, 0.7)",
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom right, #000000, #4b0082, #1a202c)',
      },
    },
  },
  plugins: [],
}