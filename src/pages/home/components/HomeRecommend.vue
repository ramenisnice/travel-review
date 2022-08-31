<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-info-title">{{ item.title }}</p>
          <p class="item-info-desc">{{ item.desc }}</p>
          <button class="item-info-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          title: "故宫",
          desc: "东方宫殿建筑代表，世界宫殿建筑典范",
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          title: "故宫",
          desc: "东方宫殿建筑代表，世界宫殿建筑典范",
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          title: "故宫",
          desc: "东方宫殿建筑代表，世界宫殿建筑典范",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl";
.title
  line-height: .8rem
  background: #eee
  margin-top: .2rem
  padding-left: .2rem
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-info-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-info-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
    .item-info-button
      line-height: .44rem
      margin-top: .15rem
      background: #ff9300
      padding: 0 .2rem
      border-radius: .06rem
      color: #fff
</style>
