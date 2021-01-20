<template>
  <header class="header padding">
    <div class="title-container">
      <h1 class="title1">Vuttr</h1>
      <h3 class="title2">Very UseFull Tools to Remember</h3>
      <!-- <h3 class="title2">Remember</h3> -->
    </div>
    <div class="container-input-button">
      <div class="contaier-input-checkbox">
        <Input />
        <Checkbox />
      </div>
      <Button
        :onClick="reverseShowModal"
        content="Adicionar uma tool"
        class="button-header"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Button from "@/components/shared/Buttons/Button.vue";
import Create from "@/components/Create/Create.vue";
import Input from "@/components/Inputs/input.vue";
import Checkbox from "@/components/CheckBox/CheckBox.vue";
import { useStore } from "vuex";
import { Store } from "@/interfaces/tools";

@Options({
  components: {
    Button,
    Create,
    Input,
    Checkbox,
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
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}
.container-input-button {
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
}
.contaier-input-checkbox{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media only screen and (max-width: 800px) {
  .header {
    width: 100%;
  }
  .contaier-input-checkbox{
    flex-direction: column;
  }
  .title-container {
    width: 100%;
    margin-bottom: 30px;
  }
  .title-container h1 {
    display: inline;
  }
  .container-input-button {
    gap: 10px;
  }
  .button-header{
    font-size: 17px;
    line-height: 14px;
  }
}
</style>
