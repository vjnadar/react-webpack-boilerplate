const path = require("path");
// const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "",
  },
  mode: "development",
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "./build"),
    index: "index.html",
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(xml)$/,
        use: ["xml-loader"],
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*", //clears the all files/folders inside build
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      meta: {
        description: "About web apps",
      },
    }),
  ],
};
