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

### 一、TabControl 组件的封装

- props -> titles
- div:根据 titles v-for 循环遍历 span{{title}}
- css 编写
- 选中哪一个 tab,哪一个 tab 的文字颜色变色，通过 currentIndex

### 二、首页商品数据的请求

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

- 把 showGoods 传入 GoodsList 组件中 props:goods -> list[8]
- v-for goods -> GoodsListItem[8]
- GoodsListItem 组件 -> GoodsItem 数据

##### 封装 GoodsListItem.vue 组件

- props:GoodsItem
- GoodsItem 取出数据进行渲染

### 三、对滚动进行重构：Better-Scroll

#### 1.在 index.html 中使用 Better-Scroll

- const bscroll = new BScroll(el, { })
- 注意：wrapper -> content ->很多内容，滚动的前提就是 content 中内容已经超出了 wrapper 固定高度，
- BetterScroll 只处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略
- 监听滚动：
  - probeType:0/1/2(监听手指滚动)/3（只要是滚动都监听）
  - bscroll.on('scroll', (position) => {})
- 上拉加载
  - pullUpLoad:true
  - bscroll.on('pullingUp', () => {})
- click:false
  - button 可以监听点击
  - div 不可以，必须设置 click:true 才能实现点击

#### 2.在 Vue 中使用 Better-Scroll

- 对 BetterScroll 进行封装：Scroll.vue
- Home.vue 与 Scroll.vue 之间进行通信
  - Home.vue 将 probeType 设置为 3
  - Scroll.vue 需要通过\$emit,实时将事件发送到 Home.vue

### 四、回到顶部 BackTop

#### 1.封装 BackTop.vue 组件

- 不可以直接监听组件点击，必须添加修饰符.native
- 回到顶部：通过 ref 拿到 scroll 对象，scroll.scrollTop(x, y, time)
- this.\$refs.scrollBS.scrollTop(0, 0, 500)

#### 2.BackTop.vue 组件的显示和隐藏

- isShow:false
- 监听滚动，拿到滚动的位置：
  - -position.y > 1000 -> isShow:true
  - isShow = -(potition.y > 1000)

### 五、如何解决 BetterScroll 可滚动区域的问题？

#### BetterScroll 在决定有多少区域可以滚动时，是根据 scrollerHeight 属性决定的

- scrollerHeight 属性是根据放在 BetterScroll 的 content 中的子组件的高度来计算的
- 但是在首页中，刚开始计算 scrollerHeight 属性时，是没有将图片高度计算在内
- 所以，计算出来的可滚动高度是错误的
- 等图片加载完毕有了新的高度，但是 scrollerHeight 并没有进行更新
- 所以滚动出现了问题（目前还没确定这个 bug 修复没有）

#### 如何解决这个问题？

- 监听每一张图片是否加载完毕，只要有一张图片加载完成了，执行一次 refresh()
- 如何监听图片加载完成了？
  - 原生的 js 监听图片：img.onload = function()
  - Vue 中监听：@load="方法名"
  - 调用 scroll 的 refresh()
  - 这个过程涉及到非父子组件的通信，推荐使用事件总线\$bus
  - 首先挂载：`Vue.prototype.$bus = new Vue();`
  - 然后发送：`this.$bus.$emit("事件名", 参数);`
  - 最后监听：`this.$bus.$on("事件名", () => {console.log("图片加载完毕");this.$refs.scrollBS.refresh();})`

### 六、refresh 找不到的问题

#### 在 Scroll.vue 组件中，调用 this.scroll 的方法之前，都要判断 this.scroll 对象是否有值

- `this.scroll && this.scroll.refresh();`

#### 在 Home.vue 组件中，不能在 created 中监听图片加载完成之后去拿 refs，在能够保证 this.$refs.scrollBS 有值的情况下，在 mounted 下进行监听

```
mounted() {
    //监听item中图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      this.$refs.scrollBS.refresh();
    });
  },
```

### 七、对于 refresh 调用比较频繁的问题，进行防抖操作

- 防抖 debounce/节流 throttle
- 防抖函数起作用的过程：
  - 如果我们直接执行 refresh,那么 refresh 函数会被执行多次，给服务器造成很大的压力
  - 可以吧 refresh 函数传入到 debounce 函数中生成一个新的函数
  - 之后调用非常频繁的时候，使用新生成的函数
  - 而新生成的函数，并不会非常频繁的调用，如果下一次执行来得非常快，那么会将上一次的取消掉
  ```
   //防抖函数
    debounce(func, delay){
      let timer = null;
      return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },
  ```
  ```
  mounted() {
    const refresh = this.debounce(this.$refs.scrollBS.refresh, 200)
    this.$bus.$on("itemImageLoad", () => {
      //调用新生成的函数
      refresh();
    });
  },
  ```
### 八、tabControl的吸顶效果
#### 1.获取到tabControl的offsetTop值
* 必须知道滚动到哪个位置，开始有吸顶效果，这个时候就需要获取tabControl的offsetTop
* 但是，如果直接在mounted中获取tabControl的offsetTop，那么值是不正确的，因为还有图片没有加载完
* 如何获取正确的值？
  * 监听HomeSwiper中的img的加载完成
  * 加载完成后，发出事件，在Home.vue中，获取正确的值
  * 为了不让HomeSwiper多次发出事件（因为有多张轮播图）
  * 可以使用isLoad变量来进行状态的记录，发送一次事件设置isLoad为true就可以了
#### 2.监听滚动，动态改变tabControl的样式
* 问题：动态的改变tabControl的样式时，会出现两个问题：
  * 问题一：下面的商品内容，会突然上移
  * 问题二：tabControl虽然设置了fixed,但是也会随着BetterScroll一起滚出去
* 其他方案来解决停留问题
  * 在最上面nav-bar下，多复制一份TabControl组件对象进行占位，利用它来实现停留效果
  * 当用户滚动到一定位置时，TabControl显示出来
  * 当用户滚动到没有达到一定位置时，TabControl隐藏起来

### 九、让Home保持原来的状态
#### 让Home不要随意销毁掉
* keep-alive
#### 让Home中的内容保持原来的位置
* 离开时deactivated，保存一个位置信息saveY
* 进来时activated，通过scrollTop将位置设置为原来保存的位置saveY
  * 注意：最好回来时，进行一次refresh()
  * bug:better-scroll的1.15.0有scrollTop的问题
  * 解决方案：版本回退：1.13.2

### 十、详情页的标题和内容的联动效果
#### 1.点击标题，滚动到对应的主题
* 在detail中监听标题的点击，获取index
* 滚动到对应的主题
  * 获取所有主题的offsetTop
  * 问题：在哪里才能获取到正确的offsetTop
    * （1）created肯定不行：压根不能获取元素
    * （2）mounted也不行：数据还没有获取到
    * （3）获取到数据的回调中也不行，DOM还没有被渲染完
    * （4）$nextTick也不行，因为图片的高度还没有被计算在内
    * （5）在图片加载完成后，获取的高度才是正确的
#### 2.内容滚动，相对应的标题显示高亮
* (1)普通做法：
* 监听滚动，获取滚动的y值
* y值与各标题的offsetTop进行比较
* 判断条件如下：
```
for (let i = 0; i < len; i++) {
        if (
          currentIndex !== i &&
          ((i < len - 1 &&
            positionY >= themeTopYs[i] &&
            positionY < themeTopYs[i + 1]) ||
            (i === len - 1 && positionY >= themeTopYs[i]))
        ) {
          this.currentIndex = i;
          this.$refs.detailNav.currentIndex = this.currentIndex;
        }
}
```
* 条件成立：`currentIndex = i`
* 条件一：`currentIndex !== i`是为了防止赋值的过程过于频繁
* 条件二：`((i < len - 1 && positionY >= themeTopYs[i] && positionY < themeTopYs[i + 1]) || (i === len - 1 && positionY >= themeTopYs[i])))`有两种情况
     * 第一种情况：`(i < len - 1 && positionY >= themeTopYs[i] && positionY < themeTopYs[i + 1])`判断区间，在0和某个数字之间`i < len - 1`
     * 第二种情况：`(i === len - 1 && positionY >= themeTopYs[i])`判断大于等于`i === len - 1`
* (2)hack做法：
* 给themeTopYs数组新添加一个非常大的值：`this.themeTopYs.push(Number.MAX_VALUE);`
```
for (let i = 0; i < len-1; i++) {
        if (
          currentIndex !== i &&
          positionY >= themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.detailNav.currentIndex = this.currentIndex;
        }
      }
```
### 十一、购物车的全选按钮
#### 显示的状态
* 判断是否有一个不选中，如果有全选按钮就是不选中
#### 点击全选按钮
* 如果原来都是选中，点击一次，全部不选中
* 如果原来都是不选中（某些不选中），全部选中

### 十二、封装toast插件
#### 普通封装方式
* 封装成组件
* 引入-注册-使用-传值
#### 插件封装方式
* 在toast文件夹新建index.js
* 在入口文件引入index.js并且安装这个插件Vue.use(toastMsg)
* 在index.js中export default toastMsg
* 编写toastMsg的install方法