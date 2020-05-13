import { UPDATEINFO } from "./mutations-types";
export default {
  //使用常量
  [UPDATEINFO](state, name) {
    state.info.username = name;
  }
}