const path = require("path");

module.exports = {
  entry: {
    scripts: path.resolve(__dirname, "src/js/scripts.js"),
  },
  output: {
    path: path.resolve(__dirname, "assets/js"),
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
    jquery: "jQuery",
  },
  mode: "development",
};

/**
 * Mode selection
 * mode: "development",
 * mode: "production",
 */
