var path = require("path");
var webpack = require("webpack");

module.exports = function(env) {

	var ExtractTextPlugin = require("extract-text-webpack-plugin");

	var config = {
		entry: "./sources/admin.js",
		output: {
			path: path.join(__dirname, "codebase"),
			publicPath:"/codebase/",
			filename: "admin.js"
		},
		devtool: "inline-source-map",
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: "babel-loader"
				},
				{
					test: /\.(svg|png|jpg|gif)$/,
					loader: "url-loader?limit=25000"
				},
				{
					test: /\.less$/,
					loader: ExtractTextPlugin.extract("css-loader!less-loader")
				}
			]
		},
		resolve: {
			extensions: [".js"],
			modules: ["./sources", "node_modules", "bower_components"],
			alias:{
				"jet-views":path.resolve(__dirname, "sources/views"),
				"jet-locales":path.resolve(__dirname, "sources/locales")
			}
		},
		plugins: [
			new ExtractTextPlugin("./admin.css")
		]
	};

	if (env && env.compress === "true") {
		config.plugins.push(
			new  webpack.optimize.UglifyJsPlugin({
				test: /\.js$/
			})
		);
	}

	return config;
}