<template>
  <div class="container-checkbox">
    <input
      @change="controllerQueryTags"
      v-model="checkbox"
      class="checkbox"
      type="checkbox"
    />
    <label class="label-check">filtro por tags</label>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Store } from "@/interfaces/tools";
import { useStore } from "vuex";

export default class Checkbox extends Vue {
  private store = useStore<Store>();
  get checkbox() {
    return this.store.state.queryTags;
  }
  controllerQueryTags() {
    this.store.commit("controllerQueryTags");
  }
}
</script>

<style lang="scss" scoped>
.container-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
  height: 50px;
}
.label-check {
  text-align: left;
  font: normal normal normal 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
  color: #170c3a;
}
@media only screen and (max-width: 800px) {
  .container-checkbox {
    margin: 0px;
    width: 100%;
  }
}
</style>
