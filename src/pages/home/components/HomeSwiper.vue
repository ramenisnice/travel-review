<template>
  <div class="wrapper">
    <SwiperWrap
      :pagination="true"
      :loop="true"
      :modules="modules"
      class="mySwiper"
      v-if="hasSwiperItems"
    >
      <SwiperSlide v-for="img in swiperList" :key="img.id">
        <img class="swiper-img" :src="img.imgUrl" />
      </SwiperSlide>
    </SwiperWrap>
  </div>
</template>

<script>
import { Pagination } from "swiper";
export default {
  props: ["swiperList"],
  computed: {
    hasSwiperItems() {
      return this.swiperList.length > 0;
    },
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="stylus" scoped>
.wrapper:deep(.swiper-pagination-bullet-active)
  background-color: #fff
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 31.25%
  background: #eee
  .swiper-img
    width: 100%
</style>
