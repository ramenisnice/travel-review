<template>
  <DetailBanner />
  <DetailHeader />
  <div class="content"></div>
</template>

<script>
import DetailBanner from "./components/DetailBanner.vue";
import DetailHeader from "./components/DetailHeader.vue";
export default {
  components: {
    DetailBanner,
    DetailHeader,
  },
};
</script>

<style lang="stylus" scoped>
.content
  width: 100%
  height: 1000px
  background: #ccc
</style>
