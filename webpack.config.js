const path = require("path");

module.exports = {
  entry: {
    scripts: path.resolve(__dirname, "src/js/scripts.js"),
  },
  output: {
    path: path.resolve(__dirname, "assets/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  externals: {
    jquery: 'jQuery',
  },
  mode: "production",
};

/**
 * Mode selection
 * mode: "development",
 * mode: "production",
 */
