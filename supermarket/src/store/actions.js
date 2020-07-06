import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutation-types"
export default {
  addCart({state, commit}, payload) {
    //方法一：
    let oldProduct = state.cartList.find(item => item.iid === payload.iid);
    if (oldProduct) {
      commit(ADD_COUNTER, oldProduct)
    } else {
      commit(ADD_TO_CART, payload)
    }
  }
}