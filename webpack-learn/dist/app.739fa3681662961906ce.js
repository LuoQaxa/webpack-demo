webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// index.js

function component() {
	var element = document.createElement('div');
	element.innerHTML = _lodash2.default.join(['Hello', 'webpack'], ' ');
	return element;
}
// 在入口文件中添加css引用

document.body.appendChild(component());

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleParseError: Module parse failed: E:\\github\\webpack-demo\\webpack-learn\\src\\static\\css\\index.css Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| .wrap {\r\n| \twidth: 300px;\r\n| \theight: 300px;\r\n    at E:\\github\\webpack-demo\\webpack-learn\\node_modules\\webpack\\lib\\NormalModule.js:302:19\n    at E:\\github\\webpack-demo\\webpack-learn\\node_modules\\webpack\\lib\\NormalModule.js:208:11\n    at E:\\github\\webpack-demo\\webpack-learn\\node_modules\\loader-runner\\lib\\LoaderRunner.js:370:3\n    at iterateNormalLoaders (E:\\github\\webpack-demo\\webpack-learn\\node_modules\\loader-runner\\lib\\LoaderRunner.js:211:10)\n    at E:\\github\\webpack-demo\\webpack-learn\\node_modules\\loader-runner\\lib\\LoaderRunner.js:202:4\n    at E:\\github\\webpack-demo\\webpack-learn\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:70:14\n    at nextTickCallbackWith0Args (node.js:452:9)\n    at process._tickCallback (node.js:381:13)");

/***/ })
],[1]);