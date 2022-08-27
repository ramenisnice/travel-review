<template>
  <div class="icons">
    <SwiperWrap>
      <SwiperSlide v-for="(page, idx) in swiperList" :key="idx">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgURL" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </SwiperSlide>
    </SwiperWrap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgURL:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
          desc: "景点门票",
        },
        {
          id: "0002",
          imgURL:
            "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
          desc: "滑雪季",
        },
        {
          id: "0003",
          imgURL:
            "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
          desc: "泡温泉",
        },
        {
          id: "0004",
          imgURL:
            "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
          desc: "动植园",
        },
        {
          id: "0005",
          imgURL:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
          desc: "景点门票",
        },
        {
          id: "0006",
          imgURL:
            "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
          desc: "滑雪季",
        },
        {
          id: "0007",
          imgURL:
            "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
          desc: "泡温泉",
        },
        {
          id: "0008",
          imgURL:
            "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
          desc: "动植园",
        },
        {
          id: "0009",
          imgURL:
            "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
          desc: "动植园",
        },
      ],
    };
  },
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
.icons >>> .swiper-slide
  overflow: hidden
  height: 0
  padding-bottom: 50%
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
