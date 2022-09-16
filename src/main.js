import { createApp } from "vue";
import router from "./router.js";
import store from "./store/index.js";

import App from "./App.vue";
import CommonGallery from "./common/gallery/CommonGallery.vue";
import "@/assets/styles/reset.css";
import "@/assets/styles/border.css";
import "@/assets/styles/iconfont.css";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

const app = createApp(App);
app.use(router);
app.use(store);

app.component("SwiperWrap", Swiper);
app.component("SwiperSlide", SwiperSlide);
app.component("CommonGallery", CommonGallery);
app.mount("#app");
