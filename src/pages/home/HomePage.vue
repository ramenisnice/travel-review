<template>
  <HomeHeader />
  <HomeSwiper :swiper-list="swiperList" />
  <HomeIcons :icon-list="iconList" />
  <HomeRecommend :recommend-list="recommendList" />
  <HomeWeekend :weekend-list="weekendList" />
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwiper from "./components/HomeSwiper.vue";
import HomeIcons from "./components/HomeIcons.vue";
import HomeRecommend from "./components/HomeRecommend.vue";
import HomeWeekend from "./components/HomeWeekend.vue";
import axios from "axios";

export default {
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  methods: {
    async getHomeInfo() {
      const { data } = await axios.get("/api/index.json");
      if (data.ret) {
        let res = data.data;
        this.swiperList = res.swiperList;
        this.iconList = res.iconList;
        this.recommendList = res.recommendList;
        this.weekendList = res.weekendList;
      } else throw Error("Failed to fetch index data.");
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>
