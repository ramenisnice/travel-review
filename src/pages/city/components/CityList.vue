<template>
  <div class="list" ref="wrapper">
    <div>
      <!-- 当前城市区域 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button">{{ currCity }}</div>
        </div>
      </div>
      <!-- 热门城市区域 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button"
            v-for="city in hotCities"
            :key="city.id"
            @click="handleCityClick(city.name)"
          >
            {{ city.name }}
          </div>
        </div>
      </div>
      <!-- 字母区域 -->
      <div class="area" v-for="(val, idx) in cities" :key="idx">
        <div class="title border-topbottom" :ref="idx">{{ idx }}</div>
        <div
          class="alphabet-item border-bottom"
          v-for="city in val"
          :key="city.id"
          @click="handleCityClick(city.name)"
        >
          {{ city.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  props: ["hotCities", "cities", "letter"],
  methods: {
    handleCityClick(city) {
      this.$store.dispatch("changeCity", city);
      this.$router.push("/");
    },
  },
  computed: {
    currCity() {
      return this.$store.state.city;
    },
  },
  mounted() {
    this.bs = new BScroll(this.$refs.wrapper, {
      click: true,
    });
  },
  updated() {
    this.bs.refresh();
  },
  watch: {
    letter() {
      if (this.letter) {
        this.bs.scrollToElement(this.$refs[this.letter][0]);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.list
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
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
