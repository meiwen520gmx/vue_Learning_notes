// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
// export const getCount = state => state.count

//求count的平方
export function getCount (state){
  return state.count * state.count
}

//拿到age大于20的学生
export function more20stu(state){
  return state.students.filter(s => s.age > 20)
}

//拿到age大于20的学生的个数
export function more20stuLen(state, getters){
  return getters.more20stu.length
}

//拿到age大于用户传进来的age值的学生
export function moreAgestu(state, getters){
	return function (age){
		return state.students.filter(s => s.age > age)
	}
}