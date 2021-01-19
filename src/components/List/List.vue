<template>
  <div class="grid-list entrada">
    <Card
      v-for="tool in tools"
      :key="tool.id"
      v-bind="tool"
      :onClickModal="() => showModal(tool.id)"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "./components/Card.vue";
import { useStore } from "vuex";
import { Store } from "@/interfaces/tools";
import ConfirmDelete from "@/components/ConfirmDelete/ConfirmDelete.vue";

@Options({
  components: {
    Card,
    ConfirmDelete,
  },
  props: {
    msg: String,
  },
})
export default class List extends Vue {
  private store = useStore<Store>();
  msg!: string;
  get tools() {
    return this.store.getters.filters(this.store.state.query);
  }

  showModal(id: string) {
    this.store.commit("controllerDelete", id);
    this.store.commit("controllerModalDelete");
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
  grid-template-columns: repeat(auto-fit, minmax(100%, auto));
  gap: 50px;
  padding-bottom: 100px;
}

.entrada {
  animation: entrada 0.8s steps(50) 0s;
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
