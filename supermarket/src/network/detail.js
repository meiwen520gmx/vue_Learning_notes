import { request } from "./index";

export function getDetail(id) {
  return request({
    url: "/detail",
    params: {
      id
    }
  });
}


//把需要的数据整理为一个对象，然后再传入到子组件中进行展示
// export class Goods {
//   constructor(itemInfo, columns, services){
//     this.title = itemInfo.title
//     this.desc = itemInfo.desc
//     this.newPrice = item.price 
//     this.oldPrice = item.oldPrice
//     this.columns = columns
//     this.services = services
//   }
// }

// const g = new Goods(data.itemInfo, data.columns, data.services)