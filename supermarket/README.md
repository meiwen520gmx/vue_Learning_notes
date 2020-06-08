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
