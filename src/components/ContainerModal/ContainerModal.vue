<template>
  <div class="container-modal">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ContainerModal extends Vue {}
</script>

<style lang="scss" scoped>
.container-modal {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
}

</style>