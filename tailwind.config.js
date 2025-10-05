module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#22FA9D",
        terciary: "#ffffff",
      },
      screens: {
        phone1: "325px",
        phone2: "375px",
        phone3: "425px",
        tablet1: "640px",
        tablet2: "768px",
        desktop1: "1024px",
        desktop2: "1280px",
        desktop3: "1440px",
      },
      fontFamily: {
        sans: ["JetBrains Mono", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
