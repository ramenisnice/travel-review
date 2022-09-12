import { createStore } from "vuex";
import stateObj from "./state.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const store = createStore({
  state() {
    return stateObj;
  },
  mutations,
  actions,
});

export default store;
