import axios from "axios";
import { Message, Loading } from "element-ui";

let loadingInstance = null; //这里是loading
export const instance = axios.create({
  timeout: 7000,
  baseURL: "https://api.apiopen.top/",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

//请求拦截器
instance.interceptors.request.use((config) => {
  loadingInstance = Loading.service({
    lock: true,
    text: "loading...",
  });
  return config;
});

//响应拦截器
instance.interceptors.response.use(
  (res) => {
    loadingInstance.close();
    return res.data;
  },
  (err) => {
    const msg = error.Message !== undefined ? error.Message : "";
    Message({
      message: "网络错误" + msg,
      type: "error",
      duration: 3 * 1000,
    });
    loadingInstance.close();
    return Promise.reject(error);
  }
);
