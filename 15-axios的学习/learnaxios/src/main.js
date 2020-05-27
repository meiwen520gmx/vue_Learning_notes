import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})




//全局配置axios
// axios.defaults.baseURL = ''
// axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


//使用全局的axios和对应的配置在进行网络请求1，2
//1.axios的基本使用
//最简单的请求方式
// axios({
//   url: 'http://route.showapi.com/109-35',
//   method: 'get'//默认是get
// }).then(res => {
//   // console.log(res)
// })

// axios({
//   url: 'https://api.apiopen.top/searchMusic',
//   //专门针对get请求的参数拼接
//   params: {
//     name: '我爱你'
//   }
// }).then(res => {
//   // console.log(res)
// })

// //2.axios发送并发请求
axios.all([axios({
  url: 'http://route.showapi.com/109-35'
}),axios({
  url: 'https://api.apiopen.top/searchMusic',
  params: {
    name: '我爱你'
  }
})]).then( res => {
   console.log(res)//数组结构
})
//也可以把结果分开展示
axios.all([axios({
  url: 'http://route.showapi.com/109-35'
}),axios({
  url: 'https://api.apiopen.top/searchMusic',
  params: {
    name: '我爱你'
  }
})]).then(axios.spread((res1, res2) => {
	  console.log(res1, res2)
}))




//3.创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://route.showapi.com/',
//   timeout: 5000
// })
// instance1({
//   url: '109-35'
// }).then(res => {
//   console.log(res)
// })

// const instance2 = axios.create({
//   baseURL: 'https://api.apiopen.top/',
//   timeout: 6000
// })
// instance2({
//   url: 'searchMusic',
//   params: {
//     name: '我爱你'
//   }
// }).then(res => {
//   console.log(res)
// })


//4.封装request模块   引入模块
import { request } from "./network/request"
// request1({
//   url: 'searchMusic'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

// request2({
//   baseConfig: {
//     url: 'searchMusic'
//   },
//   success: res => {
//     console.log(res)
//   },
//   failure: err => {
//   }
// })


request3({
  url: 'searchMusic'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
