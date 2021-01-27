const path = require("path");

const config = {
  mode: "production",
  entry: [path.join(CURRENT_WORKING_DIR, "client/main.tsx")],
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["awesome-typescript-loader"],
      },
    ],
  },
};

module.exports = config;
