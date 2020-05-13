import { UPDATEINFO } from "./mutations-types";
export default {
  //1.context上下文 store对象
  // aUpdateInfo(context, payload) {
  //   setTimeout(() => {
  //     context.commit(UPDATEINFO, payload);
  //   }, 1000);
  // },
  //2.异步操作完成后以方法形式告诉外面:这种方法不优雅
  //   aUpdateInfo(context, payload){
  //     setTimeout(() => {
  //       context.commit(UPDATEINFO, payload.message);
  //       payload.success();
  //     },1000)
  //  }
  //3.优雅写法：
  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit(UPDATEINFO, payload);
        //这里告诉别人我已经做完了
        resolve("success");
      }, 1000);
    });
  }
};
