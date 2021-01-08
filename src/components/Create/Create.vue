<template>
  <div class="modalForm">
    <form>
      <input type="text" />
      <input type="text" />
      <textarea></textarea>
      <select>
        <option value="">node</option>
        <option value="">webapps</option>
        <option value="">domain</option>
        <option value="">developer</option>
      </select>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { useStore } from "vuex";
import { Tool } from "@/interfaces/tools";
export default class Create extends Vue {
  private store = useStore();
  async createTools(data: Tool) {
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
  height: 80%;
  width: 90%;
}

@media only screen and(min-width: 700px) {
  .modalForm {
    left: 25%;
    width: 50%;
  }
}
</style>
