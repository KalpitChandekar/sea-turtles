/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "site-gradient": "linear-gradient(to bottom, #1773da, #0a387c)",
      },
      fontFamily: {
        primary: ["Lato", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
