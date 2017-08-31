// webpack.config.js
var path = require('path');
var pkg = require('./package.json');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// 利用extract-text-webpack-plugin插件拆分各种文件类型为单独的文件
module.exports = {
  entry: {
  	app: path.resolve(__dirname,'src/index.js'),
  	vendor: Object.keys(pkg.dependencies)
  },
  module: {
    
    loaders:[
      // 添加style-loader和css-loader处理css文件
      { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract("style-loader","css-loader") },
      // 添加ES6的语法支持
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins:[
    new HtmlWebpackPlugin({
    	template: __dirname + '/src/index.tmpl.html'
    }),
  	new webpack.optimize.CommonsChunkPlugin({
  		names: ['vendor'],
  	}),
    new ExtractTextPlugin('/css/[name].[chunkhash:8].css')
  ]
};