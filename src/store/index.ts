import { createStore } from "vuex";
import { StateTools, Tool } from "@/interfaces/tools";
import axios from "@/services/api";

export default createStore<StateTools>({
  state: {
    tools: [],
    query: "",
  },
  mutations: {
    setTools(state, tools) {
      state.tools = tools;
    },
    setQuery(state, query) {
      state.query = query;
    },
  },
  actions: {
    async getTools({ commit }) {
      try {
        const res = await axios.get(`/tools`);
        commit("setTools", res.data);
      } catch (error) {
        console.log("get", error);
      }
    },
    async deleteTool({ dispatch }, id) {
      try {
        const res = await axios.delete(`/tools/${id}`);
        if (res.status === 200) {
          dispatch("getTools");
        }
      } catch (error) {
        console.log("delete", error);
      }
    },
  },
  modules: {},
  getters: {
    filtro(state) {
      return (query: string) => {
        if (!query) return state.tools;
        return state.tools.filter((tool) =>
          tool.tags.toString().includes(query)
        );
      };
    },
  },
});
