<template>
  <CityHeader />
  <CitySearch />
  <CityList />
</template>

<script>
import CityHeader from "./components/CityHeader.vue";
import CitySearch from "./components/CitySearch.vue";
import CityList from "./components/CityList.vue";
export default {
  components: { CityHeader, CitySearch, CityList },
};
</script>
