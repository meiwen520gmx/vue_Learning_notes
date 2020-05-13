export default {
  state: {
    name: "zhangsan" //拿到模块A里面的name: $store.state.a.name
  },
  mutations: {
    //模块内的mutations不能与store里面的mutations里面的方法重名，到时候store会先去找自己下面的mutations看有没有changeName方法，如果没有就会去modules里面的mutations去找
    changeName(state) {
      state.name = "lisi";
    }
  },
  getters: {
    fullname(state) {
      return state.name + "aaaaaa";
    },
    fullname2(state, getters) {
      return getters.fullname + "bbbbbbb";
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.info.username;
    }
  },
  actions: {
    achangename(context) {
      //context.commit是commit自己模块下的mutations，不是store下的mutations
    }
  }
};
