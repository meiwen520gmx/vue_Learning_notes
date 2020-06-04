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
Mock.mock(`${domain}/recommends`, "get", recommends)

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
Mock.mock(`${domain}/features`, "get", features)

//tab流行新款精选
const goods = req => {
  let _data = [];
  for (let i = 0; i < 8; i++) {
    let newList = {
      title: Random.cword(5, 15),
      image: Random.dataImage("200x250"),
      link: Random.dataImage("200x250"),
      price: Random.natural(60, 999),
      collectionnum: Random.integer(0,1000)
    };
    _data.push(newList);
  }
  return { code, data: _data };
};
Mock.mock(RegExp(domain+'.*'), "get", goods)