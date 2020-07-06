import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);
const state = {
  cartList: []
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  // mutations: {
  //   //mutations中的每个方法尽可能完成的事件比较单一一点
  //   addCounter(state, payload){
  //     payload.count += 1;
  //   },
  //   addToCart(state, payload){
  //     payload.count = 1;
  //     state.cartList.push(payload);
  //   }
  // },
  // actions: {
    // addCart({state, commit}, payload) {
    //   let oldProduct = state.cartList.find(item => item.iid === payload.iid);
    //   if (oldProduct) {
    //     commit("addCounter", oldProduct)
    //   } else {
    //     commit("addToCart", payload)
    //   }
    // }
    // addCart(state, payload) {
    //   //方法一：
    //   let oldProduct = state.cartList.find(item => item.iid === payload.iid);
    //   if (oldProduct) {
    //     oldProduct.count += 1;
    //   } else {
    //     payload.count = 1;
    //     state.cartList.push(payload);
    //   }
    //   //方法二:
    //   // if (state.cartList.length !== 0) {
    //   //   state.cartList.forEach(item => {
    //   //     if(item.iid === payload.iid){
    //   //       item.count += 1;
    //   //     }else{
    //   //       payload.count = 1;
    //   //       state.cartList.push(payload);
    //   //     }
    //   //   })
    //   // } else {
    //   //   payload.count = 1;
    //   //   state.cartList.push(payload);
    //   // }
    // }
  // },
  modules: {}
});
