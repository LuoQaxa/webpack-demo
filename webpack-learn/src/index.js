// index.js

import _ from 'lodash';
// 在入口文件中添加css引用
import './static/css/index.css';
function component() {
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello','webpack'],' ');
	return element;
}
document.body.appendChild(component());

