import { createStore } from "vuex";
import { StateTools, Tool } from "@/interfaces/tools";

export default createStore<StateTools>({
  state: {
    tools: [
      {
        id: 1,
        title: "Notion",
        link: "https://notion.so",
        description:
          "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
        tags: [
          "organization",
          "planning",
          "collaboration",
          "writing",
          "calendar",
        ],
      },
      {
        id: 2,
        title: "json-server",
        link: "https://github.com/typicode/json-server",
        description:
          "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        tags: ["api", "json", "schema", "node", "github", "rest"],
      },
      {
        id: 3,
        title: "fastify",
        link: "https://www.fastify.io/",
        description:
          "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
        tags: ["web", "framework", "node", "http2", "https", "localhost"],
      },
    ],
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
  actions: {},
  modules: {},
  getters: {
    filtro(state) {
      return (query: string) => {
        if (!query) return state.tools;
        return state.tools.filter((tool) => {
          return tool.tags.toString().includes(query);
        });
      };
    },
  },
});
