var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
var CleanWebpackPlugin = require("clean-webpack-plugin");

var OUTPUT_DIR = "./build";
var AppEntry = process.env.NODE_ENV === 'production' ?
  [ "./src/main.jsx" ]
  :
  [ "webpack-dev-server/client?http://localhost:8080",
  "webpack/hot/only-dev-server",
  "./src/main.jsx" ];
console.log("node env", process.env.NODE_ENV);
var config = {
  entry: {
    app: AppEntry
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
      { test: /\.json?$/,
        loader: "json"
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.svg$/, loader: "babel!react-svg" },
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
    new CleanWebpackPlugin(['build'], {
      verbose: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
