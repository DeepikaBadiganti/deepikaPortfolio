/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
        muted: "rgb(var(--muted))",
      },
      boxShadow: {
        "glass-inset": "inset 0 4px 15px rgba(0, 0, 0, 0.2)", // Subtle dark inset shadow
        "glass-sm": "0 8px 25px rgba(0, 255, 255, 0.5)", // Bright cyan for a glow effect
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-slow-reverse": "spin-reverse 40s linear infinite",
      },
      screens : {
        xs : '480px'
      }
    },
  },
  plugins: [],
};
