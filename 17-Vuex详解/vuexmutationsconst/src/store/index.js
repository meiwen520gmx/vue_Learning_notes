import Vue from "vue";
import Vuex from "vuex";
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'

// import { UPDATEINFO } from "./mutations-types";
Vue.use(Vuex);

const state = {
  info: {
    username: "kebi",
    age: 40,
    height: 1.95
  }
};

// const mutations = {
//   //使用常量
//   [UPDATEINFO](state, name) {
//     state.info.username = name;
//   }
// };

// const actions = {
//   //1.context上下文 store对象
//   // aUpdateInfo(context, payload) {
//   //   setTimeout(() => {
//   //     context.commit(UPDATEINFO, payload);
//   //   }, 1000);
//   // },
//   //2.异步操作完成后以方法形式告诉外面:这种方法不优雅
//   //   aUpdateInfo(context, payload){
//   //     setTimeout(() => {
//   //       context.commit(UPDATEINFO, payload.message);
//   //       payload.success();
//   //     },1000)
//   //  }
//   //3.优雅写法：
//   aUpdateInfo(context, payload) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         context.commit(UPDATEINFO, payload);
//         //这里告诉别人我已经做完了
//         resolve("success");
//       }, 1000);
//     });
//   }
// };


//以后方便管理，使用模块化写法
// const moduleA = {
//   state: {
//     name: 'zhangsan' //拿到模块A里面的name: $store.state.a.name  
//   },
//   mutations: {
//     //模块内的mutations不能与store里面的mutations里面的方法重名，到时候store会先去找自己下面的mutations看有没有changeName方法，如果没有就会去modules里面的mutations去找
//     changeName(state){
//         state.name = 'lisi'
//     }
//   },
//   getters: {
//     fullname(state){
//       return state.name + 'aaaaaa'
//     },
//     fullname2(state, getters){
//       return getters.fullname + 'bbbbbbb'
//     },
//     fullname3(state, getters, rootState){
//       return getters.fullname2 + rootState.info.username
//     }
//   },
//   actions: {
//      achangename(context){
//        //context.commit是commit自己模块下的mutations，不是store下的mutations

//      }
//   }
// };
const moduleB = {
  state: {},
  mutations: {}
};


const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    a: moduleA,//这里的a会声明到store的state里面去
    b: moduleB
  }
});

export default store;
