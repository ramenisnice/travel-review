<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <!-- 搜索匹配的下拉框 -->
    <div class="search-content wrapper" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="resEl in resList"
          :key="resEl.id"
        >
          {{ resEl.name }}
        </li>
        <li class="search-item border-bottom" v-show="!resList.length">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  props: ["cities"],
  data() {
    return {
      keyword: "",
      resList: [],
      timer: null,
    };
  },
  watch: {
    keyword() {
      if (this.timer) clearTimeout(this.timer);
      if (!this.keyword) {
        this.resList = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((el) => {
            if (
              el.spell.includes(this.keyword) ||
              el.name.includes(this.keyword)
            ) {
              result.push(el);
            }
          });
        }
        this.resList = result;
      }, 100); //防抖
    },
  },
  mounted() {
    this.bs = new BScroll(".wrapper");
  },
  updated() {
    this.bs.refresh();
  },
};
</script>

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
.search-content
    background: #eee
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    overflow: hidden
    .search-item
        line-height: .62rem
        background: #fff
        padding-left: .2rem
        color: #666
</style>
