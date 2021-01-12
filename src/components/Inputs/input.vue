<template>
  <div class="padding input-container">
    <input
      @keyup="queryTools"
      v-model="query"
      class="inputShared fields"
      type="text"
      placeholder="Digite o que está procurando…"
    />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { useStore } from "vuex";

export default class Input extends Vue {
  private store = useStore();
  private query = "";

  queryTools() {
    this.store.commit("setQuery", this.query);
  }
}
</script>

<style lang="scss" scoped>
.inputShared {
  height: 50px;
  width: 100%;
  padding: 10px;
  box-shadow: 0px 0px 6px -2px rgba(0, 0, 0, 0.75);
}
.input-container {
  width: 100%;
}
.inputShared::placeholder {
  font: normal normal normal 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
  color: #b1adb9;
}

@media  screen and(min-width: 900px) {
  .input-container {
    width: 80%;
    padding: 0px;
  }
}
</style>
