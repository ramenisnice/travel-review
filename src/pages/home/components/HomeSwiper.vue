<template>
  <div class="wrapper">
    <SwiperWrap
      :pagination="true"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide v-for="img in swiperList" :key="img.id">
        <img class="swiper-img" :src="img.imgURL" />
      </SwiperSlide>
    </SwiperWrap>
  </div>
</template>

<script>
import { Pagination } from "swiper";
export default {
  data() {
    return {
      swiperList: [
        {
          id: "0001",
          imgURL:
            "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg",
        },
        {
          id: "0002",
          imgURL:
            "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg",
        },
      ],
    };
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
