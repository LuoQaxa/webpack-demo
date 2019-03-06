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
  ],
  module: { 
    // loader 可能是多个，并且是有顺序的
    // loader的处理顺序是从右到左
    // css-loader负责处理css文件，style-loader: 将css文件变成style标签并插入到html中
    // loader还可以写成对象格式, 可以对loader进行配置
    // less
    rules: [
      { test: /\.css$/, use: [ {
        loader: 'style-loader',
        options: {
          insertAt: 'top'
        }
      }, 'css-loader', 'less-loader']}
    ]
  }
}