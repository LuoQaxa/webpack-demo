const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, 'dist') //必须是一个绝对路径
  },
  devServer: { //开发服务器的配置
    port: 3000,
    progress: true,
    contentBase: './dist',
    open: true
  },
  plugins: [ // 数组
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      // 对html的压缩操作
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      },
      hash: true
    })
  ]
}