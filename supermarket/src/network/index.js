import axios from "axios";

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    timeout: 5000,
    baseURL: "https://api.apiopen.top/",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  });
  //2.axios的拦截器
  //请求拦截器
  instance.interceptors.request.use(config => {
    return config;
  });

  //响应拦截器
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      console.log(err);
    }
  );
  //3.发送真正的网络请求
  return instance(config);
}
