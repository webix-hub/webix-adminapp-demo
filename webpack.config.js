var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: './sources/admin.js',
  output: {
    path: path.join(__dirname, 'codebase'),
    publicPath:"/codebase/",
    filename: 'admin.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
      	test: /\.(svg|png|jpg|gif)$/,
      	loader: 'url-loader?limit=25000',
         options: {
          presets: ['env', { loose:true }]
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("css-loader!less-loader")
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: ["./sources", "node_modules", "bower_components"],
    alias:{
      "jet-views":path.resolve(__dirname, 'sources/views')
    }
  },
  plugins: [
    new ExtractTextPlugin("./admin.css")
  ]
};

module.exports = config;