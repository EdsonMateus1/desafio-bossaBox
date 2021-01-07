<template>
  <div class="header">
    <div class="title-container">
      <h1 class="title1">Vuttr</h1>
      <h2 class="title2">Very UseFull Tools to</h2>
      <h2 class="title2">Remember</h2>
    </div>
    <Button content="Adiconar uma tarefa"/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Button from "@/components/shared/Buttons/Button.vue";

@Options({
  components: {
    Button,
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
@media screen and(min-width: 500px) {
}
</style>
