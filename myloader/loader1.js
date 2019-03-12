// this function is called when a resource should be transformed by this loader
var babel = require('babel-core');
function loader(sourceCode) {
  var babelOptions = {
    presets: ['env']
  }
  var result = babel.transform(sourceCode, babelOptions)
  return result.code
}


// In more complex cases, the loader can return any number of values by using the this.callback(err, values...)
module.exports = loader
