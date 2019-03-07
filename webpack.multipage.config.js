const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    home: './src-multipage/index.js',
    other: './src-multipage/other.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'multipage_dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src-multipage/index.html',
      // 默认是将打包出的所有文件都加到html中，可制定文件
      filename: 'home.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: './src-multipage/index.html',
      // 默认是将打包出的所有文件都加到html中，可制定文件
      filename: 'other.html',
      chunks: ['other']
    })
  ]
}