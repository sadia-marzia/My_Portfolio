/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1E293B", // Navy Blue
          light: "#334155",
          dark: "#0F172A",
        },
        ash: {
          DEFAULT: "#94A3B8", // Grey Ash
          light: "#E2E8F0",
          dark: "#64748B",
        },
        accent: "#1c449a", // A touch of bright accent (e.g., links or buttons)
      },
    },
  },
  plugins: [],
};