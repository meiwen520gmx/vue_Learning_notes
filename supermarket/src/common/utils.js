//工具类 放公共的方法

//防抖函数
export function debounce(func, delay){
  let timer = null;
  return function(...args){
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

//保留两位小数
export function toFix(num1, num2){
  if(typeof(num1) == 'undefined'){
    return num1
  }else{
    return Number(num1.toFixed(num2))
  }
}