import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      if (state.cartList.length !== 0) {
        state.cartList.forEach(item => {
          if(item.iid === payload.iid){
            item.count += 1;
          }else{
            payload.count = 1;
            state.cartList.push(payload);
          }
        })
      } else {
        payload.count = 1;
        state.cartList.push(payload);
      }
    }
  },
  actions: {},
  modules: {}
});
