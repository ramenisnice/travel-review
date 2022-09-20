<template>
  <!-- 页面向下拖动时渐隐渐显的箭头符号和header -->
  <div>
    <div class="header-abs" v-show="showAbs" @click="handleArrowClick">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <div class="iconfont header-fixed-back" @click="handleArrowClick">
        &#xe624;
      </div>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  methods: {
    handleArrowClick() {
      this.$router.push("/");
    },
    handleScroll() {
      const top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset; //垂直滑动了多少距离
      if (top > 60) {
        let opacity = top / 140; //动态渐隐渐显
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false; //滑动页面 显示不同的header
      } else {
        this.showAbs = true;
      }
    },
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll); //如何监听scroll事件
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="stylus" scoped>
.header-abs
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  border-radius: .4rem
  background: rgba(0,0,0,0.8)
  text-align: center
  line-height: .8rem
  .header-abs-back
    color: #fff
    font-size: .4rem
.header-fixed
  z-index: 2
  position: fixed
  top: 0
  right: 0
  left: 0
  line-height: .86rem
  text-align: center
  font-size: .32rem
  color: #fff
  background: #00bcd4
  .header-fixed-back
    position: absolute
    top: 0
    left: 0
    width: .64rem
    font-size: .4rem
</style>
