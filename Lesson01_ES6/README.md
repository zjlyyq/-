# ES6转换为ES5的几种方式

1. ## 直接命令行使用babel转换
- 全局安装babel-cli

  `npm install -g babel-cli `
- 安装转换插件（此插件定义了 ES2015 转码规则，相当于是字典的功能）：

  `npm install babel-preset-es2015 –save `
- 命令行转换

  `babel es6.js --out-file es5.js --presets es2015 `
- 自动转换

  `babel es6.js -w --out-file es5.js --presets es2015 `

2. ## 使用browser在浏览器上自动转换
