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



