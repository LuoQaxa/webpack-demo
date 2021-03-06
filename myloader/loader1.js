// this function is called when a resource should be transformed by this loader
var babel = require('babel-core');
function loader(sourceCode, sourceMap) {
  var babelOptions = {
    presets: ['env'],
    inputSourceMap: sourceMap,
    filename: this.request.split('!')[1].split('/').pop(),
    sourceMap: true
  }
  var result = babel.transform(sourceCode, babelOptions)
  // return result.code
  console.log(result.code);
  
  this.callback(null, result.code, result.map)
}


// In more complex cases, the loader can return any number of values by using the this.callback(err, values...)
module.exports = loader
