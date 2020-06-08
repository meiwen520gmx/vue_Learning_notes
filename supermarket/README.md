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
* 在home.js中封装getHomeGoods(type,page)
* 在Home.vue中的methods中封装getHomeGoods(type)
* 在页面初始时调用getHomeGoods('pop')/getHomeGoods('new')/getHomeGoods('sell')
   * page:动态的获取对应的page
* 获取数据res
   * this.goods[type].list.push(...res.data);
