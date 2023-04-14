/** @type {import('tailwindcss').UserConfig} */
module.exports = {
  mode: "jit",
  purge: {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
