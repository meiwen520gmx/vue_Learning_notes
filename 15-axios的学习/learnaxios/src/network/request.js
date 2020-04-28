import axios from "axios";

// export function request(config,success,failure){
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

// export function request(config){
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

// export function request(config) {
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

export function request(config) {
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


  return instance(config);
}
