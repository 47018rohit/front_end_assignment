/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        none:'#00000000',
        primary: "#050816",
        secondary: "rgba(255, 255, 255, 0.4)",
        tertiary: "#151030",
        "black-10": "#000000",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      // transitionProperty: {
      //   'transition- property': 'all',
      //   'transition- timing - function': 'cubic- bezier(0.01, 0.94, 0.17, 1.01)',
      //   'transition- duration': '150ms'

      // }
      transitionTimingFunction:{
        'transition- timing - function': 'cubic- bezier(0.01, 0.94, 0.17, 1.01)',
      }
    },
  },
  plugins: [],
};