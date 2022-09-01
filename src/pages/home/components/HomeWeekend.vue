<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in weekendList" :key="item.id">
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

<script>
export default {
  props: ["weekendList"],
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl";
.title
  line-height: .8rem
  background: #eee

  padding-left: .2rem
.item
  margin-bottom: .06rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
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
