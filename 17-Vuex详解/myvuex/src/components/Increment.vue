<template>
  <div>
    <h2>------------Login.vue----------</h2>
    <button @click="login">登录</button>
    <!-- 这里方便查看 -->
    <h2>{{ $store.state.username }}</h2>
    <h2>count的平方==={{ $store.getters.powerCount }}</h2>
    <h2>学生年龄大于20==={{ $store.getters.more20stu }}</h2>
    <h2>学生年龄大于20的个数==={{ $store.getters.more20stuLen }}</h2>
    <h2>学生年龄大于age的个数==={{ $store.getters.moreAgestu(18) }}</h2>

    <h2>count的平方==={{ power }}</h2>
    <h2>学生年龄大于20==={{ more20 }}</h2>
    <h2>学生年龄大于20的个数==={{ num }}</h2>

		<!-- <h2>count的平方==={{ getCount }}</h2>
    <h2>学生年龄大于20==={{ more20stu }}</h2>
    <h2>学生年龄大于20的个数==={{ more20stuLen }}</h2> -->

		<button @click="increment(5)">+5</button>
		<button @click="increment(10)">+10</button>
		<h2>{{$store.state.count}}</h2>


		<h2>{{$store.state.info}}</h2>
		<button @click="updateinfo">修改信息</button>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  methods: {
    login() {
      this.$store.commit("saveName", "huahua");
		},
		updateinfo(){
			this.$store.commit('updataInfo')
		},
		increment(num){
			//1.普通的提交风格
			this.$store.commit("increment",num);

			//2.特殊的提交风格
			this.$store.commit({
				type: 'increment',
				num  //打印出来num是个对象 在index.js中
				//increment(state, payload){
		    //        state.count = state.count + payload.num
	      // }
			})
		}
  },
  computed: {
		// ...mapGetters(['getCount','more20stu','more20stuLen']),
    power() {
      return this.$store.getters.powerCount;
    },
    more20(){
      return this.$store.getters.more20stu;
    },
    num(){
      return this.$store.getters.more20stuLen
    }
  }
};
</script>
