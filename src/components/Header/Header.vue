<template>
  <header class="header padding">
    <div class="title-container">
      <h1 class="title1">Vuttr</h1>
      <h2 class="title2">Very UseFull Tools to</h2>
      <h2 class="title2">Remember</h2>
    </div>
    <Button
      class="button-header"
      :onClick="reverseShowModal"
      content="Adicionar uma tool"
    />
  </header>
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
    this.store.commit("controllerModalCreate");
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media only screen and (max-width: 600px) {
  .header {
    flex-direction: column;
  }
  .title-container {
    width: 100%;
    margin-bottom: 30px;
  }
  .title-container h1 {
    display: inline;
  }
  .button-header {
    width: 100%;
  }
}
</style>
