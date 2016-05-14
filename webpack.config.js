var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

var OUTPUT_DIR = "./build";

var config = {
  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:8080",
      "webpack/hot/only-dev-server",
      "./src/main.jsx"
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "app.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: "react-hot!babel?presets[]=es2015,presets[]=react",
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  devServer: {
    contentBase: OUTPUT_DIR,
    devtool: "eval",
    progress: true,
    colors: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Will Cameron Resume",
      template: "src/index.html",
      inject: "body"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
