module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#f9a8d4",

          "secondary": "#ec4899",

          "accent": "#99f6e4",

          "neutral": "#c084fc",

          "base-100": "#FFFFFF",

          "info": "#fcd34d",

          "success": "#36D399",

          "warning": "#99f6e4",

          "error": "#F87272",
        },

      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
}
