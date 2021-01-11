import { createStore } from "vuex";
import { Store, Tool } from "@/interfaces/tools";
import axios from "@/services/api";

export default createStore<Store>({
  state: {
    tools: [],
    query: "",
    showModal: false,
  },
  mutations: {
    setTools(state, tools) {
      state.tools = tools;
    },
    setQuery(state, query) {
      state.query = query;
    },
    controllerModal(state) {
      state.showModal = !state.showModal
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
    async createTools({ dispatch }, data: Tool) {
      try {
        const res = await axios.post("/tools", data);
        if (res.status === 201) {
          dispatch("getTools");
          return true;
        }
        return false;
      } catch (error) {
        console.log("post", error);
        return false;
      }
    },
  },
  modules: {},
  getters: {
    filters(state) {
      return (query: string) => {
        if (!query) return state.tools;
        return state.tools.filter((tool) => {
          const queryFormat = query.toLocaleLowerCase().trim();
          return (
            tool.tags
              .toString()
              .toLocaleLowerCase()
              .includes(queryFormat) ||
            tool.title
              .toString()
              .toLocaleLowerCase()
              .includes(queryFormat)
          );
        });
      };
    },
  },
});
