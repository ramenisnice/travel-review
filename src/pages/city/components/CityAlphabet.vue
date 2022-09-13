<template>
  <ul class="list">
    <li
      class="item"
      v-for="letter in letters"
      :key="letter"
      :ref="letter"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ letter }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["cities"],
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    };
  },
  computed: {
    letters() {
      const letters = Object.keys(this.cities);
      return letters;
    },
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("letter-change", e.target.innerText);
      //emit一个事件传到CityPage -> CityList定位到相应区块
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          //offsetTop是DOM元素到它parent顶部的距离
          const touchY = e.touches[0].clientY; //touch事件的clientY是到视口顶部的距离
          const distance = touchY - this.startY - 79;
          const endLetterIdx = Math.floor(distance / 20);
          if (endLetterIdx >= 0 && endLetterIdx <= 21) {
            const endLetter = this.letters[endLetterIdx];
            this.$emit("letter-change", endLetter);
          }
        }, 8);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.list
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    display: flex
    flex-direction: column
    justify-content: center
    .item
        line-height: .4rem
        text-align: center
        color: #00bcd4
</style>
