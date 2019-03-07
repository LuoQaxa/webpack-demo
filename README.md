# webpack-demo
webpack4.0

## 基础配置
1. 依赖： `webpack webpack-cli`
2. 支持零配置打包

## webpack-dev-server
内部是用express搭建的静态服务器，每次打包的时候并没有真正的打包成文件，而是放在内存中，使得开发速度很快
默认以当前目录做为静态目录
1. 常用配置
```js
devServer: {
  port: 3000,
  open: true,
  // 是在哪个目录下启动服务,一般是在打包后的目录
  contentBase: './dist'
}
```

## 插件Plugin
1. HtmlWebpackPlugin： 解决了不需要在打包后的文件中去手动建立一个`index.html`,可以指定任意路径的html作为模版，并且自动将打包后的js文件添加到html中。
2. 

## 配置开发所需loader
webpack默认只支持js文件的打包，而开发所需的css,scss,less等各种文件都需要特定的loader进行转化。
#### 特点：
1. loader功能单一，通常需要多个loader进行组合使用。
2. loader的配置是有顺序的，从右往左的处理顺序
3. loader也可以进行配置

#### 常用loader
1. css-loader style-loader less-loader
2. 


## 多页面
多个入口，多个打包输出文件，多个html文件
