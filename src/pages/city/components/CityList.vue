<template>
  <div class="list">
    <!-- 当前城市区域 -->
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button">北京</div>
      </div>
    </div>
    <!-- 热门城市区域 -->
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button">北京</div>
        <div class="button">北京</div>
        <div class="button">北京</div>
        <div class="button">北京</div>
        <div class="button">北京</div>
      </div>
    </div>
    <!-- 字母区域 -->
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
      <div class="alphabet-item border-bottom">阿克苏</div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.list
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: red
    .title
        line-height: .54rem
        padding-left: .2rem
        font-size: .26rem
        color: #666
        background: #eee
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .button-list
        padding: .1rem .2rem .1rem .1rem
        overflow: hidden
        .button
            width: 28%
            height: .48rem
            line-height: .48rem
            float: left
            text-align: center
            border: .02rem solid #ccc
            border-radius: .06rem
            margin: .1rem
    .alphabet-item
        padding-left: .2rem
        line-height: .76rem
    .border-bottom
        &:before
            border-color: #ccc
</style>
