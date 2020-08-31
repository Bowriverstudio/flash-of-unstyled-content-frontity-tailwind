module.exports = {
  theme: {
    extend: {
      colors: {
        twin: "#9500ff"
      }
    }
  },
  plugins: [
    require("tailwindcss-gradients"),
    // require("tailwindcss-typography"),
    require("tailwindcss-aspect-ratio"),
    require("@tailwindcss/ui")
  ]
};
