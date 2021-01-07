<template>
  <transition name="fade-card">
    <div class="grid-list entrada">
      <Card v-for="tool in toolsComputed" :key="tool.id" v-bind="tool" />
    </div>
  </transition>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "./components/Card.vue";
import { useStore } from "vuex";
import store from "@/store";

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
  private tools = store.getters.filtro(this.store.state.query);

  get toolsComputed() {
    return this.store.getters.filtro(this.store.state.query);
  }
  msg!: string;
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
  }
}
</style>
