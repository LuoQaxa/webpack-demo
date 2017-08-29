// webpack.config.js
var path = require('path');
var pkg = require('./package.json');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
  	app: path.resolve(__dirname,'src/index.js'),
  	// index:'./src/index.js',
  	vendor: Object.keys(pkg.dependencies)
  },
  
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins:[
    new HtmlWebpackPlugin({
    	template: __dirname + '/src/index.tmpl.html'
    }),
  	new webpack.optimize.CommonsChunkPlugin({
  		names: ['vendor'],
  	})
  ]
};