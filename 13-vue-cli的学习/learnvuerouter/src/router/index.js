import Vue from 'vue'
//配置路由相关的信息
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

//通过Vue.use（插件），安装插件
Vue.use(Router)

//路由懒加载
const HelloWorld = () => import('../components/HelloWorld')
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const News = () => import('../components/HomeNews')
const Message = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')


//创建Router对象
const router = new Router({
  mode:'history',
  // linkActiveClass: 'active',//修改router-link被激活的样式名称router-link-active，改为active的简便改法
  //配置路由和组件之间的应用关系
  routes: [
    {
      path: '',
      //redirect重定向
      redirect: '/home'
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '你好页'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '',
          // component: News
          redirect: 'news'
        },
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        title: '档案'
      }
    }
  ]
})

export default router
//export default 是将Router对象传入到vue实例

// 第一步：导入路由对象，并且调用Vue.use(VueRouter)
// 第二步：创建路由实例，并且传入路由映射配置
// 第三步：在Vue实例中挂载创建的路由实例

//前置守卫
router.beforeEach((to, from, next) => {
  console.log(to)
  //设置每个页面的title
  document.title = to.matched[0].meta.title
  next()
})

//后置钩子
router.afterEach((to, from) => {

})

