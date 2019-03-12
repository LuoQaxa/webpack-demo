## 1. 简单的loader
只是对source code做的一个transform，返回source code 字符串

## 2. 添加sourcemap
The first value is a resulting JavaScript code as string or buffer. The second optional value is a SourceMap as JavaScript object.
sourcemap 是交给webpack

## 3. sourcemap的名字是unknown
通过this.request来设置sourcemap的名字，loader是一个构造函数吗，不然怎么会有this呢

