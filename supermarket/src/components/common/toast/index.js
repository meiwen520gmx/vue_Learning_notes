import Vue from "vue"
import Toast from "./Toast"

// const toast = {}
// toast.install = function (Vue) {
//   //1.创建组件构造器
//   const toastConstructor = Vue.extend(Toast);
//   //2.new的方式，根据组件构造器，可以创建出来一个组件对象
//   const toast = new toastConstructor()
//   //3.将组件对象，手动挂载到某一个元素上
//   toast.$mount(document.createElement('div'));
//   //4.toast.$el对应的就是div
//   document.body.appendChild(toast.$el);
//   Vue.prototype.$toast = toast;
// }
// export default toast;


let ToastTem = Vue.extend(Toast);//声明构造函数
let instance = null;
let timer = null;
let toastMsg = (options) => {
  
  if(!instance){
    instance = new ToastTem();
    instance.vm = instance.$mount(document.createElement('div'));
    document.body.appendChild(instance.vm.$el)
  }
  if(timer){
    clearTimeout(timer);
    timer = null;
    instance.isShow = false;
    instance.message = ""
  }
  instance.time = 2000;
  if(typeof options === "string"){
    instance.message = options
  }else if(typeof options === 'object'){
    let {message, time} = options;
    instance.message = message;
    instance.time = time || 2000
  }else{
    return
  }
  instance.isShow = true;
  timer = setTimeout(() => {
    instance.isShow = false;
    clearTimeout(timer)
    timer = null;
    instance.message = ""
  }, instance.time)
}

toastMsg.close = () => {
  if(timer){
    clearTimeout(timer)
    timer = null;
    instance.isShow = false;
    instance.message = ""
  }
}
toastMsg.install = (Vue) => {
  Vue.prototype.$toast = toastMsg;
}
export default toastMsg;


