<template>
  <transition name="fade-card">
    <div class="grid-list entrada">
      <Card v-for="tool in tools" :key="tool.id" v-bind="tool" />
    </div>
  </transition>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "./components/Card.vue";

@Options({
  components: {
    Card,
  },
  props: {
    msg: String,
  },
})
export default class List extends Vue {
  private tools = [
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
  ];

  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grid-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.entrada {
  animation: entrada 0.5s steps(50) 0.1s;
}
@media screen and(min-width: 700px) {
  .grid-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, auto));
    gap: 20px;
  }
}

@keyframes entrada {
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
  }
}
</style>
