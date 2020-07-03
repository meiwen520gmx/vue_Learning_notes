// //混入
// import { debounce } from "common/utils";
import BackTop from "components/content/backTop/BackTop";
export const itemListenerMixin = {
  //   data() {
  //     return {
  //       itemImgListener: null,
  //       refresh: null
  //     };
  //   },
  //   destroyed() {
  //     //取消全局事件的监听
  //     this.$bus.$off("itemImageLoad", this.itemImgListener);
  //   },
  //   mounted() {
  //     this.refresh = debounce(this.$refs.scrollBS.refresh, 200);
  //     this.itemImgListener = () => {
  //       this.refresh();
  //     };
  //     //监听item中图片加载完成
  //     this.$bus.$on("itemImageLoad", this.itemImgListener);
  //   }
};

export const imageListener = {
  data() {
    return {
      isLoad: false //记录有没有发送事件
    };
  },
  methods: {
    imageLoad() {
      //只需要发送一次事件就可以了
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    }
  }
};

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    
  }
};
