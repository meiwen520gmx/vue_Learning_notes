import Mock from "mockjs"; //引入Mock对象

const Random = Mock.Random; //获取random对象，随机生成各种数据
const domain = "http://mockjs.com/api"; //定义默认域名
const code = 200; //返回的状态码

//首页轮播图数据
const banner = req => {
  //req为请求体用于获取参数
  let _data = [];
  for (let i = 0; i < 4; i++) {
    let newList = {
      title: Random.cword(1, 4),
      image: Random.dataImage("390x240"),
      link: Random.dataImage("390x240")
    };
    _data.push(newList);
  }
  return { code, data: _data }; //返回状态码和轮播图数据
};
//定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/banner`, "get", banner);

//推荐
const recommends = req => {
  let _data = [];
  for (let i = 0; i < 4; i++) {
    let newList = {
      title: Random.cword(1, 5),
      image: Random.dataImage("100x100"),
      link: Random.dataImage("100x100")
    };
    _data.push(newList);
  }
  return { code, data: _data }; //返回状态码和推荐数据
};
Mock.mock(`${domain}/recommends`, "get", recommends);

//本周流行
const features = req => {
  let _data = [];
  for (let i = 0; i < 8; i++) {
    let newList = {
      title: Random.cword(1, 5),
      image: Random.dataImage("100x100"),
      link: Random.dataImage("100x100")
    };
    _data.push(newList);
  }
  return { code, data: _data };
};
Mock.mock(`${domain}/features`, "get", features);

//tab流行新款精选
const goods = req => {
  let _data = [];
  for (let i = 0; i < 8; i++) {
    let newList = {
      id: Random.integer(0, 1000),
      title: Random.cword(5, 15),
      image: Random.dataImage("200x250"),
      link: Random.dataImage("200x250"),
      price: Random.natural(60, 999),
      collectionnum: Random.integer(0, 1000)
    };
    _data.push(newList);
  }
  return { code, data: _data };
};
Mock.mock(RegExp(`${domain}/goods` + ".*"), "get", goods);

//商品详情页数据
const detail = options => {
  let result = {
    id: options.url.split("=")[1],
    goodsInfo: {
      desc: Random.cword(20, 50),
      price: Random.natural(60, 999),
      columns: [
        "销量" + Random.integer(0, 1000),
        "收藏" + Random.integer(0, 1000) + "人",
        "默认快递"
      ]
    },
    isLogin: false,
    topImages: [
      Random.dataImage("390x390"),
      Random.dataImage("390x390"),
      Random.dataImage("390x390")
    ],
    shopInfo: {
      avator: Random.dataImage("50x50"),
      shopName: Random.cword(5, 10),
      TotalSale: Random.float(10, 100),
      TotalGoods: Random.natural(50, 999),
      score: [
        { name: "描述相符", score: Random.float(1, 9) },
        { name: "价格合理", score: Random.float(1, 9) },
        { name: "质量满意", score: Random.float(1, 9) }
      ]
    },
    price: Random.natural(60, 999),
    collectionnum: Random.integer(0, 1000)
  };
  return { code, data: result };
};
Mock.mock(RegExp(`${domain}/detail` + ".*"), "get", detail);
