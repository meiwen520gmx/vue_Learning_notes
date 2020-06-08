# supermarket

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# 重点记录

### TabControl 组件的封装

- props -> titles
- div:根据 titles v-for 循环遍历 span{{title}}
- css 编写
- 选中哪一个 tab,哪一个 tab 的文字颜色变色，通过 currentIndex

### 首页商品数据的请求

#### 1. 设计数据结构，用户保存数据

         ```
          goods: {
          pop: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          sell: {
            page: 0,
            list: []
          }
        }
         ```

#### 2. 发送数据请求

- 在 home.js 中封装 getHomeGoods(type,page)
- 在 Home.vue 中的 methods 中封装 getHomeGoods(type)
- 在页面初始时调用 getHomeGoods('pop')/getHomeGoods('new')/getHomeGoods('sell')
  - page:动态的获取对应的 page
- 获取数据 res
  - this.goods[type].list.push(...res.data);
  - this.goods[type].page += 1;

#### 3.对商品数据进行展示

##### 封装 GoodsList.vue 组件

- 在 Home.vue 中计算属性计算出 showGoods，当前展示哪一个 tab 选项内容，通过点击 TabControl 来改变当前的 currentType

```
     showGoods() {
        return this.goods[this.currentType].list;
      }
```
* 把showGoods传入GoodsList组件中props:goods -> list[8]
* v-for goods -> GoodsListItem[8]
* GoodsListItem组件 -> GoodsItem数据

##### 封装 GoodsListItem.vue 组件
* props:GoodsItem
* GoodsItem取出数据进行渲染


### 对滚动进行重构：Better-Scroll
#### 1.在index.html中使用Better-Scroll
* const bscroll = new BScroll(el, { })
* 注意：wrapper -> content ->很多内容，滚动的前提就是content中内容已经超出了wrapper固定高度，
* BetterScroll 只处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略
* 监听滚动：
  * probeType:0/1/2(监听手指滚动)/3（只要是滚动都监听）
  * bscroll.on('scroll', (position) => {})
* 上拉加载
  * pullUpLoad:true
  * bscroll.on('pullingUp', () => {})
* click:false
  * button可以监听点击
  * div不可以，必须设置click:true才能实现点击

#### 2.在Vue中使用Better-Scroll
* 对BetterScroll进行封装：Scroll.vue
* Home.vue与Scroll.vue之间进行通信
  * Home.vue将probeType设置为3
  * Scroll.vue需要通过$emit,实时将事件发送到Home.vue

### 回到顶部BackTop

#### 1.封装BackTop.vue组件
* 不可以直接监听组件点击，必须添加修饰符.native
* 回到顶部：通过ref拿到scroll对象，scroll.scrollTop(x, y, time)
* this.$refs.scrollBS.scrollTop(0, 0, 500)

#### 2.BackTop.vue组件的显示和隐藏
* isShow:false
* 监听滚动，拿到滚动的位置：
  * -position.y > 1000 -> isShow:true
  * isShow = -(potition.y > 1000)