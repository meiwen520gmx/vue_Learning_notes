const path = require("path");
// const mockhomedata = require('./src/mock/home.json');

module.exports = {
  lintOnSave: false,//关闭eslint规范
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network"
      }
    }
  },
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("less").oneOf(type))
    );
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
  // devServer: {

  // port: 4000,
  // before(app){
  //   app.get('/goods/list', (req, res, next) => {
  //     res.json(mockhomedata);
  //   })
  // }
  // }
};
function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        // 需要全局导入的less路径，自己修改，我这里引入了两个less文件
        path.resolve(__dirname, "./src/assets/css/common.less"),
        path.resolve(__dirname, "./src/assets/css/base.less")
      ]
    });
}
