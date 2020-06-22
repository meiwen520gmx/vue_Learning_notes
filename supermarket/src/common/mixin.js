//混入
import { debounce } from "common/utils";
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null
    };
  },
  destroyed() {
    //取消全局事件的监听
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  mounted() {
    this.refresh = debounce(this.$refs.scrollBS.refresh, 200);
    this.itemImgListener = () => {
      this.refresh();
    };
    //监听item中图片加载完成
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  }
};
