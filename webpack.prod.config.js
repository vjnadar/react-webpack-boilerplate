const path = require("path");
const colors=require("colors");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
colors.enable();
console.log("Building the necessary production files. Please wait...".cyan);
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle-[name].[contenthash].js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "",
  },
  mode: "production",
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
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
    new MiniCssExtractPlugin({
      filename: "styles-[name].[contenthash].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*", //clears the all files/folders inside build
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon:"./public/favicon.ico",
      meta: {
        description: "About web apps",
      },
    }),
  ],
};
console.log("Ready. Here you go!".blue);