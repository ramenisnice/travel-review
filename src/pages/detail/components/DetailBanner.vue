<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>2
        </div>
      </div>
    </div>
    <CommonGallery
      :imgs="galleryImgs"
      v-show="showGallery"
      @close-gallery="handleGalleryClose"
    />
  </div>
</template>

<script>
export default {
  props: ["sightName", "bannerImg", "galleryImgs"],
  data() {
    return {
      showGallery: false,
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallery = true;
    },
    handleGalleryClose() {
      this.showGallery = false;
      window.scrollTo({ top: 0 });
    },
  },
};
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  background: #ccc
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))
    .banner-title
      flex: 1
      font-size: .32rem
      padding: 0 .2rem
    .banner-number
      margin-top: .14rem
      padding: 0 .4rem
      height: .32rem
      line-height: .32rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
        margin-right: .08rem
</style>
