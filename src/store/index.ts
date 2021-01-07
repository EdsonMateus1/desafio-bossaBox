import Vue from "vue";
import Vuex  from "vuex";
import { Tools } from "@/interfaces/tools";

Vue.use(Vuex);

export default Vuex.Store<Tools>({
  state: {
    tools: [],
  },
  mutations: {
    setTools(state, tools) {
      state.tools = tools;
    },
  },
  actions: {},
  modules: {},
});
