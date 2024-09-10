/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#141517",
        "custom-green": "#6A9113",
      },
    },
  },
  plugins: [],
};
