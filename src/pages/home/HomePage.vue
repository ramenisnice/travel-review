<template>
  <HomeHeader />
  <HomeSwiper />
  <HomeIcons />
  <HomeRecommend />
  <HomeWeekend />
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwiper from "./components/HomeSwiper.vue";
import HomeIcons from "./components/HomeIcons.vue";
import HomeRecommend from "./components/HomeRecommend.vue";
import HomeWeekend from "./components/HomeWeekend.vue";

export default {
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
};
</script>
