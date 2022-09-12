export default {
  changeCity(state, payload) {
    state.city = payload;
    try {
      localStorage.setItem("city", payload);
    } catch (e) {
      console.log(e);
    }
  },
};
