const path = require('path');

// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
// 	template: path.join(__dirname, 'src', 'html', 'index.html'),
// 	filename: 'index.html',
// 	inject: 'body'
// });

module.exports = {
	entry: path.join(__dirname, 'src', 'js', 'entry2.js'),
	output: {
		path: path.join(__dirname, 'dist', 'js'),
		filename: 'index_bundle_2.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	}
	// plugins: [HTMLWebpackPluginConfig]
}