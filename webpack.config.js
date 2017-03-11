const path = require('path');
module.exports = {
	entry: path.join(__dirname, 'src', 'js', 'entry.js'),
	output: {
		path: path.join(__dirname, 'dist', 'js'),
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	}
}