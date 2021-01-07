<template>
  <div class="modalForm">
    modal
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { useStore } from "vuex";

export default class Create extends Vue {
  private store = useStore();
  async createTools(data: object) {
    data = {
      title: "hotel",
      link: "https://github.com/typicode/hotel",
      description:
        "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
      tags: [
        "node",
        "organizing",
        "webapps",
        "domain",
        "developer",
        "https",
        "proxy",
      ],
    };
    const res = await this.store.dispatch("createTools", data);
    if (res) {
      console.log("cadastrado");
    }
  }
}
</script>

<style lang="scss" scoped>
.modalForm {
  position: absolute;
  top: calc(50vh - 200px);
  left: 5%;
  background-color: red;
  height: 400px;
  width: 90%;
}

@media only screen and(min-width: 700px) {
  .modalForm {
    top: calc(50vh - 200px);
    left: 25%;
    width: 50%;
  }
}
</style>
