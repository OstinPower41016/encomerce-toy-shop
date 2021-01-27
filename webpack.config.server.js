const path = require("path");
const nodeExternals = require("webpack-node-externals");
const Dotenv = require("dotenv-webpack");

const config = {
  name: "server",
  entry: [path.join(__dirname, "./server/server.ts")],
  target: "node",
  output: {
    path: path.join(__dirname, "/dist/"),
    filename: "server.generated.js",
    publicPath: "/dist/",
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["awesome-typescript-loader"],
      },
    ],
  },
  plugins: [new Dotenv()],
  resolve: {
    extensions: [".ts", ".js"],
  },
};

module.exports = config;
