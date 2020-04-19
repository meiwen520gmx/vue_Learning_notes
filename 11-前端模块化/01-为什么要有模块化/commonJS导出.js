//coommonJS写法，只是告诉你这样写，但是写在这里是毫无意义的，因为没有底层来解析这个语法，后面
//在node里面可以这样写，因为有底层来解析这个语法
//模块化有两个核心：导出和导入
//导出：
moduleA.exports = {
  flag:true,
  sum(num1,num2){
    return num1+num2;
  }
};
//导入
let  {flag,sum} = require('moduleA');
