const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	plugins: [new CleanWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: './cache/babel',
						},
					},
					{
						loader: 'eslint-loader',
						options: {
							fix: true,
							cache: './cache/eslint',
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	stats: 'minimal',
}
