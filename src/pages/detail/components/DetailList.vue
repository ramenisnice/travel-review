<template>
  <div>
    <div class="item" v-for="(item, idx) in ticketList" :key="idx">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        <DetailList :ticketList="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ticketList"],
};
</script>

<style lang="stylus" scoped>
.item-title
  line-height: .8rem
  font-size: .32rem
  padding: 0 .2rem
  .item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
.item-children
  padding: 0 .2rem
</style>
