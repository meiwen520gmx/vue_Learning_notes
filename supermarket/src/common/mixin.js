//混入
import { debounce } from "common/utils";
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scrollBS.refresh, 200);

    //对监听的事件进行保存
    this.itemImgListener = () => {
      // this.$refs.scrollBS.refresh()这个会执行很多次，给服务器造成了很多压力，对此进行优化使用防抖函数：;
      refresh();
    };
    //监听item中图片加载完成
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  }
};
