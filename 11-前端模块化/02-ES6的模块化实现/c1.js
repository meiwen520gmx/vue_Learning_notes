// import {flag,sum,num1,mum,Person} from "./a1.js";
//
//
// if(flag){
//   console.log('小明是天才！！！！');
//   console.log(sum(50, 50));
//   console.log(num1);
//   console.log(mum(20, 20));
//   const p = new Person();
//   p.run();
//
// }
//导入export default中的内容
import addr from "./a1.js";
addr('你好啊');

//统一全部导入
import * as info  from './a1.js'
console.log(info.name,info.age,info.sum(10,10))