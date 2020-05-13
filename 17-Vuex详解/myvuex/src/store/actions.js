// action 会收到 store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
// {commit}是对象的解构，本来这个参数是context上下文，也就是store对象，打印这个对象，你就会知道里面有很多东西，其中就有commit这个东西
export  const saveName = ({commit}, payload) =>{
  commit('SAVENAME',payload)
}//触发保存用户名方法

export  const saveToken = ({commit}, payload) =>{
  commit('SAVETOKEN',payload)
}//触发保存用户token方法

export  const saveRole = ({commit}, payload) =>{
  commit('SAVEROLE',payload)
}//触发保存用户角色方法