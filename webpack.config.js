const path = require("path");
const isDevelopment = process.env.NODE_ENV !== "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: {
    app: "./resources/js/App.tsx",
    index: "./resources/css/app.css",
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "public/js"),
    publicPath: "/js/",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "resources/js"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/[name].css",
    }),
  ].filter(Boolean),
  devtool: "source-map",
};
