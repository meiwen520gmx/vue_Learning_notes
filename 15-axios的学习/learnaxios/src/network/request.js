import axios from "axios";


// export default是导出一个东西，export function是导出多个东西

//方法一：
// export function request1(config,success,failure){
//     1.创建axios实例
//     const instance = axios.create({
//         baseURL: 'https://api.apiopen.top/',
//         timeout: 5000
//     })
//     instance(config).then(res => {
//         success(res)
//     })
//     .catch(err => {
//         failure(err)
//     })
// }
//使用：
//引入模块
// import { request1 } from "./network/request"
// request1({
//   url: 'searchMusic'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })


//方法二：
// export function request2(config){
//     const instance = axios.create({
//         baseURL: 'https://api.apiopen.top/',
//         timeout: 5000
//     })
//     instance(config.baseConfig).then(res => {
//         config.success(res)
//     })
//     .catch(err => {
//         config.failure(err)
//     })
// }
//使用：
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



//方法三：
// export function request3(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: "https://api.apiopen.top/",
//       timeout: 5000
//     });
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       });
//   });
// }
//使用：
// request3({
//   url: 'searchMusic'
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

//方法四：
export function request4(config) {
  const instance = axios.create({
    baseURL: "https://api.apiopen.top/",
    timeout: 5000
  });

  //拦截器
  instance.interceptors.request.use(config => {
      //处理config中的一些信息不符合服务器的要求
      //每次发送网络请求时，希望在界面中显示一个请求的图标
      //某些网络请求（比如登录），必须携带一些特殊的信息
        console.log(config)
        return config
  }, err => {
        console.log(err)
  })

  instance.interceptors.response.use(res => {
    return res
  }, err => {

  })


  return instance(config);//返回一个promise
}
//使用：
// request4({
//   url: 'searchMusic'
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
