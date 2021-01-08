<template>
  <div class="modalForm padding">
    <Button :onClick="closeModal" class="button-fechar"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        height="34"
        viewBox="0 0 24 24"
        width="34"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        /></svg
    ></Button>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              viewBox="0 0 24 24"
              width="15"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
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
import Button from "@/components/shared/Buttons/Button.vue";

@Options({
  components: { Button },
  emits: ["onCloseModal"],
})
export default class Create extends Vue {
  private store = useStore();
  private tagsControoler = "";
  private toolsForm = {
    title: "",
    link: "",
    description: "",
    tags: ["tools"],
  };

  closeModal() {
    this.$emit("onCloseModal", false);
  }

  addComboBoxController() {
    const selectValue = this.tagsControoler.toString();
    this.toolsForm.tags.push(selectValue);
    this.tagsControoler = "";
  }
  async createTools() {
    const res = await this.store.dispatch("createTools", this.toolsForm);
    this.$emit("onCloseModal", !res);
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
  padding: 25px 20px 30px;
  display: flex;
  flex-direction: column;
  
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
  width: 70%;
  margin-top: 30px;
  font: normal normal normal 26px/26px Source Sans Pro;
  align-self: center;
  
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
  padding: 4px;
  margin-left: 8px;
  font: normal normal 600 15px/13px Source Sans Pro;
}
.container-button-add {
  margin: 5px 0px;
}
.button-fechar {
  padding: 4px;
  font: normal normal 600 15px/13px Source Sans Pro;
  align-self: flex-end;
  background-color: white !important;
  box-shadow: none;
}
.button-fechar svg{
  fill: #10b26c;
}
@media only screen and(min-width: 700px) {
  .modalForm {
    left: 25%;
    width: 50%;
  }
}
</style>
