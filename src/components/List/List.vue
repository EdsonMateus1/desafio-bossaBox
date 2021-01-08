<template>
  <div class="grid-list entrada">
    <Card
      v-for="tool in tools"
      :key="tool.id"
      v-bind="tool"
      :onClick="() => deleteTool(tool.id)"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "./components/Card.vue";
import { useStore } from "vuex";

@Options({
  components: {
    Card,
  },
  props: {
    msg: String,
  },
})
export default class List extends Vue {
  private store = useStore();
  msg!: string;
  get tools() {
    return this.store.getters.filters(this.store.state.query);
  }

  deleteTool(id: string) {
    this.store.dispatch("deleteTool", id);
  }

  mounted() {
    this.store.dispatch("getTools");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grid-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 50px;
  padding-bottom: 100px;
}

.entrada {
  animation: entrada 0.8s steps(50) 0s;
}

@media only screen and(min-width: 700px) {
  .grid-list {
    grid-template-columns: repeat(auto-fit, minmax(100%, auto));
  }
}

@keyframes entrada {
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
