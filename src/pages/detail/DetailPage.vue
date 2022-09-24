<template>
  <DetailBanner
    :sightName="sightName"
    :bannerImg="bannerImg"
    :galleryImgs="galleryImgs"
  />
  <DetailHeader />
  <div class="content"><DetailList :ticketList="ticketList" /></div>
</template>

<script>
import DetailBanner from "./components/DetailBanner.vue";
import DetailHeader from "./components/DetailHeader.vue";
import DetailList from "./components/DetailList.vue";
import axios from "axios";
export default {
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      galleryImgs: [],
      ticketList: [],
    };
  },
  methods: {
    async getDetailInfo() {
      const { data } = await axios.get("../api/detail.json", {
        params: {
          id: this.$route.params.itemId,
        },
      });
      if (data.ret && data.data) {
        const res = data.data;
        this.sightName = res.sightName;
        this.bannerImg = res.bannerImg;
        this.galleryImgs = res.galleryImgs;
        this.ticketList = res.categoryList;
      }
    },
  },
  activated() {
    this.getDetailInfo();
  },
};
</script>

<style lang="stylus" scoped>
.content
  width: 100%
  height: 1000px
</style>
