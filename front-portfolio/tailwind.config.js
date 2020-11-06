module.exports = {
    future: {
      // removeDeprecatedGapUtilities: true,
      // purgeLayersByDefault: true,
    },
    purge: [
      "./pages/**/*.js", 
      "./components/**/*.js", 
      "./plugins/**/*.js",
      "./static/**/*.js",
      "./store/**/*.js"
    ],
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }