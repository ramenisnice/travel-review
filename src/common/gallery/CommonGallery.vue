<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <SwiperWrap
        class="mySwiper"
        :modules="modules"
        :pagination="{ type: 'fraction' }"
      >
        <SwiperSlide v-for="(imgUrl, idx) in imgs" :key="idx">
          <img class="img" :src="imgUrl" />
        </SwiperSlide>
      </SwiperWrap>
    </div>
  </div>
</template>

<script>
import { Pagination } from "swiper";
export default {
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handleGalleryClick() {
      this.$emit("close-gallery");
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
.container
  display: flex
  flex-direction: column
  justify-content: center
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #000
  z-index: 1
  .wrapper:deep(.swiper)
    overflow: visible
  .wrapper:deep(.swiper-pagination)
    color: #fff
    bottom: -1rem
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 100%
    .img
      width: 100%
</style>
