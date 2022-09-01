<template>
  <div class="header">
    <router-link to="/">
      <div class="back-icon iconfont">&#xe624;</div>
    </router-link>
    城市选择
  </div>
</template>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl";
.header
  position: relative
  height: .86rem
  line-height: .86rem
  font-size: .32rem
  text-align: center
  color: #fff
  background: $bgColor
  .back-icon
    position: absolute
    padding-left: .12rem
    font-size: .4rem
    color: #fff
</style>
