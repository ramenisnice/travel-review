<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl";
.search
    height: .72rem
    text-align: center
    background: $bgColor
    .search-input
        box-sizing: border-box
        height: .62rem
        width: 97%
        padding: 0 .1rem
        border-radius: .06rem
        text-align: center
        color: #666
</style>
