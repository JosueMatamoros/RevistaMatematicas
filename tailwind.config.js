// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        "tec-blue-primary": "#012D50",
        "tec-blue-secondary": "#0582E0",
        "tec-red-primary": "#EF3340",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],      // texto base
        display: ["var(--font-poppins)", "sans-serif"], // Articulos / abstract
        alt: ["var(--font-source-sans)", "sans-serif"], // títulos
      },
    },
  },
  plugins: [],
});
