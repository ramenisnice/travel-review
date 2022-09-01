<template>
  <div class="icons">
    <SwiperWrap>
      <SwiperSlide v-for="(page, idx) in swiperList" :key="idx">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </SwiperSlide>
    </SwiperWrap>
  </div>
</template>

<script>
export default {
  props: ["iconList"],
  computed: {
    swiperList() {
      const list = [];
      this.iconList.forEach((val, index) => {
        const pageIdx = Math.floor(index / 8);
        if (!list[pageIdx]) list[pageIdx] = [];
        list[pageIdx].push(val);
      });
      return list;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl";
@import "~@/assets/styles/mixins.styl";
.icons:deep(.swiper-slide)
  overflow: hidden
  height: 0
  padding-bottom: 50%
.icons
  margin-top: .1rem
  .icon
    position: relative
    overflow: hidden
    width: 25%
    height: 0
    padding-bottom: 25%
    float: left
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      text-align: center
      .icon-img-content
        height: 100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
