<template>
  <div class="modalForm padding">
    <form @submit.prevent="createTools" class="form">
      <div style="margin-top: 0px;" class="itens-form">
        <label style="margin-top: 0px;" class="label" for="title"
          >tool title</label
        >
        <input
          v-model="toolsForm.title"
          class="fields input"
          name="title"
          type="text"
          id="title"
        />
      </div>

      <div class="itens-form">
        <label class="label" for="link">tool link</label>
        <input
          v-model="toolsForm.link"
          class="fields input"
          name="link"
          type="text"
          id="link"
        />
      </div>

      <div class="itens-form">
        <label class="label" for="description">tool description</label>
        <textarea
          v-model="toolsForm.description"
          class="fields textarea"
          name="description"
          id="description"
        ></textarea>
      </div>

      <div class="itens-form">
        <div class="container-button-add">
          <label style="margin: 0px" class="label" for="tags">tags</label>
          <button
            @click.prevent="addComboBoxController"
            class="button button-add-tags"
          >
            +
          </button>
        </div>
        <input
          v-model="tagsControoler"
          class="fields input input-combo-box"
          name="link"
          type="text"
          id="tags"
        />

        <div class="fields input combo-box-container">
          <strong class="combo-box" v-for="box in toolsForm.tags" :key="box">
            {{ box }}
          </strong>
        </div>
      </div>
      <Button type="submit" class="button-form" content="Adicionar" />
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
  emits: ["onCloseModal"] ,
})
export default class Create extends Vue {
  private store = useStore();
  private tagsControoler = "";
  private toolsForm = {
    title: "",
    link: "",
    description: "",
    tags: ["tags"],
  };

  addComboBoxController() {
    const selectValue = this.tagsControoler.toString();
    this.toolsForm.tags.push(selectValue);
    this.tagsControoler = "";
  }
  async createTools() {
    const res = await this.store.dispatch("createTools", this.toolsForm);
    this.$emit("onCloseModal", false);
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

.combo-box-container {
  display: flex;
  align-items: center;
  height: 50px !important;
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
.input-combo-box {
  margin-bottom: 20px;
  font: normal normal normal 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
  color: #170c3a;
  height: 35px;
}
.button-form {
  margin-top: 10px;
}
.combo-box {
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  font-weight: normal;
  font: normal normal normal 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
  color: #170c3a;
  margin: 0px 5px;
  height: 42px;
  padding: 5px;
}
.button-add-tags {
  padding: 5px;
  margin-left: 8px;
  font: normal normal 600 15px/13px Source Sans Pro;
}
.container-button-add {
  margin: 5px 0px;
}

@media only screen and(min-width: 700px) {
  .modalForm {
    left: 25%;
    width: 50%;
  }
}
</style>
