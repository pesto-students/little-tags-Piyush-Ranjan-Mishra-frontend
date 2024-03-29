module.exports = {
  entry: ["./public/src/index.js"],
  output: {
    path: __dirname + "/public/",
    publicPath: "/",
    filename: "bundle.js",
  },
  devtool: "eval",
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel",
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat",
    },
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./public",
  },
};
