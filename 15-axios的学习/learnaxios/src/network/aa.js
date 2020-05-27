//练习敲
import axios from 'axios'

export function request(config){

  const instance = axios.create({
    baseURL="http://",
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  },err => {

  })
  
  instance.interceptors.response.use(res => {
      return res;
  },err => {

  })

  return instance(config);
}