<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
        :to="`/detail/${item.id}`"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-info-title">{{ item.title }}</p>
          <p class="item-info-desc">{{ item.desc }}</p>
          <button class="item-info-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["recommendList"],
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
      color: #333
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
