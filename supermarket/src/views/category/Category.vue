<template>
  <div class="wrapper">
    <!-- BetterScroll 只处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略 -->
    <div>
      <!-- 无论是否设置click:true,button都可以点击 -->
      <button @click="btnClick">按钮</button>
      <!-- 必须设置click:true,那么div才能监听点击 -->
      <div @click="divClick">
        div点击
      </div>
      <ul class="content">
        <li>内容1</li>
        <li>内容2</li>
        <li>内容3</li>
        <li>内容4</li>
        <li>内容5</li>
        <li>内容6</li>
        <li>内容7</li>
        <li>内容8</li>
        <li>内容9</li>
        <li>内容10</li>
        <li>内容11</li>
        <li>内容12</li>
        <li>内容13</li>
        <li>内容14</li>
        <li>内容15</li>
        <li>内容16</li>
        <li>内容17</li>
        <li>内容18</li>
        <li>内容19</li>
        <li>内容20</li>
        <li>内容21</li>
        <li>内容22</li>
        <li>内容23</li>
        <li>内容24</li>
        <li>内容25</li>
        <li>内容26</li>
        <li>内容27</li>
        <li>内容28</li>
        <li>内容29</li>
        <li>内容30</li>
        <li>内容31</li>
        <li>内容32</li>
        <li>内容33</li>
        <li>内容34</li>
        <li>内容35</li>
        <li>内容36</li>
        <li>内容37</li>
        <li>内容38</li>
        <li>内容39</li>
        <li>内容40</li>
        <li>内容41</li>
        <li>内容42</li>
        <li>内容43</li>
        <li>内容44</li>
        <li>内容45</li>
        <li>内容46</li>
        <li>内容47</li>
        <li>内容48</li>
        <li>内容49</li>
        <li>内容50</li>
        <li>内容51</li>
        <li>内容52</li>
        <li>内容53</li>
        <li>内容54</li>
        <li>内容55</li>
        <li>内容56</li>
        <li>内容57</li>
        <li>内容58</li>
        <li>内容59</li>
        <li>内容60</li>
        <li>内容61</li>
        <li>内容62</li>
        <li>内容63</li>
        <li>内容64</li>
        <li>内容65</li>
        <li>内容66</li>
        <li>内容67</li>
        <li>内容68</li>
        <li>内容69</li>
        <li>内容70</li>
        <li>内容71</li>
        <li>内容72</li>
        <li>内容73</li>
        <li>内容74</li>
        <li>内容75</li>
        <li>内容76</li>
        <li>内容77</li>
        <li>内容78</li>
        <li>内容79</li>
        <li>内容80</li>
        <li>内容81</li>
        <li>内容82</li>
        <li>内容83</li>
        <li>内容84</li>
        <li>内容85</li>
        <li>内容86</li>
        <li>内容87</li>
        <li>内容88</li>
        <li>内容89</li>
        <li>内容90</li>
        <li>内容91</li>
        <li>内容92</li>
        <li>内容93</li>
        <li>内容94</li>
        <li>内容95</li>
        <li>内容96</li>
        <li>内容97</li>
        <li>内容98</li>
        <li>内容99</li>
        <li>内容100</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "category",
  mounted() {
    let bs = new BScroll(".wrapper", {
      probeType: 2,
      pullUpLoad: true,
      click:true//必须设置click:true,那么div才能监听点击
    });
    //监听滚动
    bs.on("scroll", position => {
      // console.log(position)
    });
    //监听加载更多
    bs.on("pullingUp", () => {
      console.log("上拉加载更多");
      //网络请求更多的数据后
      setTimeout(() => {
        bs.finishPullUp();
      }, 1000);
    });
  },
  methods: {
    btnClick() {
      console.log("按钮点击");
    },
    divClick() {
      console.log("div点击");
    }
  }
};
</script>

<style scoped>
.wrapper {
  height: 300px;
  background-color: #333;
  overflow: hidden;
}
</style>
