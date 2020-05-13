import Vuex from 'vuex'
import Vue from 'vue'

// import state from './state'
// import * as getters from './getters'
// import * as mutations from './mutations'

//1.安装插件
Vue.use(Vuex)

const state = {
  // 应用启动时，username 置为空
  username: '',
  count: 10,
  students: [
    {id: 1, name: 'zhangsan', age: 18},
    {id: 2, name: 'lisi', age: 20},
    {id: 3, name: 'xiaohua', age: 15},
    {id: 4, name: 'jinjin', age: 22}
	],
	info: {
		name: 'kebi',
		age: 40
	}
}

const mutations = {
  // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state,第二个参数传过来的参数
   saveName(state, name){
     state.username = name;
	 },
	 increment(state, num){
		 state.count = state.count + num
	 },
	 updataInfo(state){
		//  state.info.name = 'gmx'
		// Vue.set(state.info, 'address', '重庆市渝中区')//响应式的
		//该方式做不到响应式:delete state.info.age
		Vue.delete(state.info, 'age')//响应式的
	 }
}

const getters = {
  //求count的平方
  powerCount(state){
    return state.count * state.count
  },
  //拿到age大于20的学生
  more20stu(state){
    return state.students.filter(s => s.age > 20)
  },
  //拿到age大于20的学生的个数
  more20stuLen(state, getters){
    return getters.more20stu.length
  },
  
  //拿到age大于用户传进来的age值的学生
  moreAgestu(state, getters){
    return function (age){
      return state.students.filter(s => s.age > age)
    }
  }
}

//2.创建对象
const store = new Vuex.Store({
  state,
  mutations,
  getters
})

export default store;