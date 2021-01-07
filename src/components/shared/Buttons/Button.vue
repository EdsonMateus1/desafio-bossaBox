<template>
  <button class="button">Adiconar ferramenta</button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
.button {
  background: #0dcb7d 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 10px;
  font: normal normal 600 18px/16px Source Sans Pro;
  color: #ffffff;
  border: none;
  outline-style: none;
  box-shadow: 27px 8px 64px 12px rgba(16, 178, 108, 0.82) inset;
}
.button:hover {
  background-color: #10b26c;
}
@media screen and(min-width: 700px) {
  .button {
    font: normal normal 600 22px/24px Source Sans Pro;
  }
}
</style>
