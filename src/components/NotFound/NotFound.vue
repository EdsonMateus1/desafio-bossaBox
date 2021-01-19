<template>
  <div class="NotFound">
    <h1>(404) Page NotFound</h1>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

export default class NotFound extends Vue {}
</script>

<style lang="scss" scoped>
.NotFound {
  margin-top: 15%;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 50%;
}
.NotFound h1{
  font: normal normal 800 40px/40px Source Sans Pro;
}
</style>
