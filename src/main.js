import { createApp } from "vue";
import router from "./router.js";

import App from "./App.vue";
import "@/assets/styles/reset.css";
import "@/assets/styles/border.css";
import "@/assets/styles/iconfont.css";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

const app = createApp(App);
app.use(router);

app.component("SwiperWrap", Swiper);
app.component("SwiperSlide", SwiperSlide);
app.mount("#app");
