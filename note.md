1. 解析bundle
一个自执行函数，传入一个对象，这个对象是文件以及对应的文件模块的函数
基础结构：
```js
 (function(params) {
   
 })({
   "./src/index.js":  //key 模块的路径
   (function (module, exports) { //value 函数
     eval("console.log('i am a front-end engineer');\n\n\n//# sourceURL=webpack:///./src/index.js?")
   })
 })
```

