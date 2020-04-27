const {add,mul} = require('./js/mathUtils.js');

console.log(add(20, 30));

console.log(mul(10, 10));

//依赖css文件
require('./css/nomal.css');

//依赖less文件
require('./css/special.less');

document.writeln("<h2>你好啊！陌生人</h2>")

import Vue from 'vue'

// import App from './vue/app.js'

import App from './vue/App.vue'
new Vue({
    el: '#app',
    template:'<App />',
    components: {
        App
    }
})