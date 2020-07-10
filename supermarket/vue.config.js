const path = require("path");
// const mockhomedata = require('./src/mock/home.json');

module.exports = {
  lintOnSave: false, //关闭eslint规范
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
      },
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            viewportWidth: 375, //视窗的宽度，对应的是我们设计稿的宽度 一般是750
            viewportHeight: 667, //视窗的高度，对应的是我们设计稿的高度 一般是1334
            unitPrecision: 5, //指定px转换为视窗单位值得小数位数（很多时候无法整除）
            viewportUnit: "vw", //指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: ["ignore"], //指定不需要转换的类
            minPixelValue: 1, //小于或等于1px不转换为视窗单位
            mediaQuery: false //允许在媒体查询中转换px
          })
        ]
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
