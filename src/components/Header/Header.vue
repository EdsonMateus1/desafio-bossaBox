<template>
  <div class="header">
    <div class="title-container">
      <h1 class="title1">Vuttr</h1>
      <h2 class="title2">Very UseFull Tools to</h2>
      <h2 class="title2">Remember</h2>
    </div>
    <Button :onClick="reverseShowModal" content="Adiconar uma tarefa" />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Button from "@/components/shared/Buttons/Button.vue";
import Create from "@/components/Create/Create.vue";
import { useStore } from "vuex";
import { Store } from "@/interfaces/tools";

@Options({
  components: {
    Button,
    Create,
  },
})
export default class Header extends Vue {
  private store = useStore<Store>();
  reverseShowModal() {
    this.store.commit("controllerModal")
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
</style>
