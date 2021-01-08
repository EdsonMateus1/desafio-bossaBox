<template>
  <div class="modalForm padding">
    <form class="form">
      <div style="margin-top: 0px;" class="itens-form">
        <label style="margin-top: 0px;" class="label" for="title">tool title</label>
        <input class="fields input" name="title" type="text" id="title" />
      </div>

      <div class="itens-form">
        <label class="label" for="link">tool link</label>
        <input class="fields input" name="link" type="text" id="link" />
      </div>

      <div class="itens-form">
        <label class="label" for="description">tool description</label>
        <textarea
          class="fields textarea"
          name="description"
          id="description"
        ></textarea>
      </div>

      <div class="itens-form">
        <label class="label" for="tags">tags</label>
        <select class="fields select" name="" id="">
          <option class="option" value="node">node</option>
          <option class="option" value="organizing">organizing</option>
          <option class="option" value="developer">developer</option>
        </select>
        <input class="fields input" type="text" name="tags" id="tags" />
      </div>
      <Button class="button-form" content="Adicionar" />
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
import { Tool } from "@/interfaces/tools";
import Button from "@/components/shared/Buttons/Button.vue";

@Options({
  components: { Button },
})
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
  width: 90%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  padding: 30px 20px;
}

.form {
  display: flex;
  flex-direction: column;
}
.itens-form {
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
}
.textarea {
  height: 180px;
}

.input {
  height: 35px;
}
.select {
  margin-bottom: 20px;
  height: 35px;
  font: normal normal normal 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
  color: #170c3a;
}
.button-form{
  margin-top: 10px;
}

@media only screen and(min-width: 700px) {
  .modalForm {
    left: 25%;
    width: 50%;
  }
}
</style>
