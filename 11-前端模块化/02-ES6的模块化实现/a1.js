var name='小明'
var age = 18
var flag = true

function sum(num1,num2){
  return num1 + num2;
}

if(flag){
  console.log(sum(20, 30));
}

//1.导出方式一：
export {
   flag,sum,name,age
}
//2.导出方式二：
export var num1=1000;

//3.导出函数/类：
export function mum(num1, num2) {
  return num1 + num2;
}
export class Person{
   run(){
     console.log('我在雨中奔跑');
   }
}

//4.export default
// const address = '北京市'
// default默认的只能有一个，因此导入的时候别人可以随便命名
//某些情况下，一个模块中包含某个功能，我们并不希望给这个功能命名，让导入者可以自己来命名
// export default address


export default function (argument) {
  console.log(argument);
}
