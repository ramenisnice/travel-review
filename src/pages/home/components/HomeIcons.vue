<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"
        />
      </div>
      <p class="icon-desc">景点门票</p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl";
.icons
  overflow: hidden
  height: 0
  padding-bottom: 50%
  background: #ccc
  .icon
    position: relative
    overflow: hidden
    width: 25%
    height: 0
    padding-bottom: 25%
    float: left
    background: pink
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      text-align: center
      background: red
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
</style>
