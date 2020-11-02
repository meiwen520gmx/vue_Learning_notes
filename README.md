## 搭框架
### css全局变量(sass)
* 在vue.config.js中进行配置
```
css: {
    extract: "",
    sourceMap: false,
    loaderOptions: {
      scss: {
      prependData: `
        @import "@src/styles/main.scss";
        `
      }
    }
  }
```
### 路由配置
* 路由重定向：`redirect:'login'`

