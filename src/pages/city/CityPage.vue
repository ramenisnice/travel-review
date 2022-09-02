<template>
  <CityHeader />
  <CitySearch />
  <CityList :curr-city="currCity" :hot-cities="hotCities" :cities="cities" />
  <CityAlphabet :cities="cities" />
</template>

<script>
import CityHeader from "./components/CityHeader.vue";
import CitySearch from "./components/CitySearch.vue";
import CityList from "./components/CityList.vue";
import CityAlphabet from "./components/CityAlphabet.vue";
import axios from "axios";
export default {
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
  data() {
    return {
      currCity: "",
      hotCities: [],
      cities: {},
    };
  },
  methods: {
    async getCityInfo() {
      const { data } = await axios.get("/api/city.json");
      if (data.ret && data.data) {
        const res = data.data;
        this.currCity = res.city;
        this.hotCities = res.hotCities;
        this.cities = res.cities;
      }
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>
