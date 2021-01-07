<template>
  <div class="padding input-container">
    <input class="input" type="text" placeholder="Pesquisar?" />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Input extends Vue {}
</script>

<style lang="scss" scoped>
.input {
  height: 50px;
  width: 100%;
  padding: 5px;
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  box-shadow: 2px 2px 13px -6px rgba(0, 0, 0, 0.75);
}
.input-container {
  width: 100%;
}

@media screen and(min-width: 500px) {
  .input-container {
    width: 80%;
  }
}
</style>
