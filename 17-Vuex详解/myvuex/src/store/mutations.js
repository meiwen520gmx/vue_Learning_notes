export const SAVENAME = (state,name) => {
  state.username = name
}//保存用户名

export const SAVETOKEN = (state,token) => {
  state.token = token
}//保存用户token

export const SAVEROLE = (state,role) => {
  state.role = role
}//保存用户角色