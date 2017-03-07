
//直接require模块的形式会在当前目录下先查找node-modules下有没有
//如果没有就到上级目录的node-modules模块下查找，找到为止
var webpack = require('webpack');

module.exports = {
	//定义打包入口文件
	entry:'./js/index.js',
	//定义打包输出文件路径
	output:{
		path:'./js/app/dist',
		filename:'webpack.merge.js'
	},
	// resolve:{
	// 	//定义别名
	// 	alias:{
	// 		jquery:'./lib/jquery-3.1.1.min'
	// 	}
	// },
	//定义插件不用在每一个组件都引入jquery了，将jquery定义为全局变量
	// plugins:[
	// 	new webpack.ProvidePlugin({
	// 		$:'jquery',
	// 		jQuery: 'jquery',
 //            "window.jquery": 'jquery'
	// 	})
	// ]

}