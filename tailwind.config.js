module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#201F1D",
          secondary: "#F6862A",
          accent: "#4E443C",
          neutral: "#3A332D",
          success: "#7AC05A",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
