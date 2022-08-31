<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>

        <div class="item-info">
          <p class="item-info-title">{{ item.title }}</p>
          <p class="item-info-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl";
.title
  line-height: .8rem
  background: #eee
  margin-top: .2rem
  padding-left: .2rem
.item
  margin-bottom: .06rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 38.01%
    background: red
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-info-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-info-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
<script>
export default {
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天",
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天",
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天",
        },
      ],
    };
  },
};
</script>
