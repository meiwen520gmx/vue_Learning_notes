import { request } from "./index";

//轮播图
export function getBannerData() {
  return request({
    url: "/banner"
  });
}

//推荐
export function getRecommendData() {
  return request({
    url: "/recommends"
  });
}

//本周流行
export function getFeaturesData() {
  return request({
    url: "/features"
  });
}

//tab数据
export function getHomeGoods(type, page){
  return request({
    url: '/goods',
    params: {
      type,
      page
    }
  })
}