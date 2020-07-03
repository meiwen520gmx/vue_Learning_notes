import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      //方法一：
      let oldProduct = state.cartList.find(item => item.iid === payload.iid);
      if (oldProduct) {
        oldProduct.count += 1;
      } else {
        payload.count = 1;
        state.cartList.push(payload);
      }
      //方法二:
      // if (state.cartList.length !== 0) {
      //   state.cartList.forEach(item => {
      //     if(item.iid === payload.iid){
      //       item.count += 1;
      //     }else{
      //       payload.count = 1;
      //       state.cartList.push(payload);
      //     }
      //   })
      // } else {
      //   payload.count = 1;
      //   state.cartList.push(payload);
      // }
    }
  },
  actions: {},
  modules: {}
});
