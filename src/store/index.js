import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      city: "北京",
    };
  },
  mutations: {
    changeCity(state, payload) {
      state.city = payload;
    },
  },
  actions: {
    changeCity(context, city) {
      context.commit("changeCity", city);
    },
  },
});

export default store;
