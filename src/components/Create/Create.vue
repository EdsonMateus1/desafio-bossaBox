<template>
  <ContainerModal>
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
            :class="{ error: error.title }"
            @input="errorTitle"
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
            :class="{ error: error.link }"
            @input="errorLink"
          />
        </div>

        <div class="itens-form">
          <label class="label" for="description">tool description</label>
          <textarea
            v-model="toolsForm.description"
            class="fields textarea"
            name="description"
            id="description"
            :class="{ error: error.description }"
            @input="errorDescription"
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
                height="20"
                viewBox="0 0 24 24"
                width="20"
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

          <div
            :class="{ error: error.tags }"
            class="fields input combo-box-container "
          >
            <strong class="combo-box" v-for="tag in toolsForm.tags" :key="tag">
              {{ tag }}
            </strong>
          </div>
        </div>
        <Button @click="required" type="submit" class="button-form" content="Adicionar" />
      </form>
    </div>
  </ContainerModal>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
import Button from "@/components/shared/Buttons/Button.vue";
import { Store, Tool } from "@/interfaces/tools";
import ContainerModal from "../ContainerModal/ContainerModal.vue";

@Options({
  components: { Button, ContainerModal },
})
export default class Create extends Vue {
  private store = useStore<Store>();
  private tagsControoler = "";
  private error = {
    title: false,
    link: false,
    description: false,
    tags: false,
  };
  private toolsForm: Tool = {
    title: "",
    link: "",
    description: "",
    tags: [],
  };

  errorTitle() {
    if (this.toolsForm.title) {
      this.error.title = false;
    } else {
      this.error.title = true;
    }
  }
  errorDescription() {
    if (this.toolsForm.description) {
      this.error.description = false;
    } else {
      this.error.description = true;
    }
  }
  errorLink() {
    if (this.toolsForm.link) {
      this.error.link = false;
    } else {
      this.error.link = true;
    }
  }
  errorTags() {
    if (this.toolsForm.tags.length) {
      this.error.tags = false;
    } else {
      this.error.tags = true;
    }
  }

  required() {
    this.errorTitle();
    this.errorDescription();
    this.errorLink();
    this.errorTags();
  }

  closeModal() {
    this.store.commit("controllerModalCreate");
  }

  addComboBoxController() {
    if (this.tagsControoler) {
      this.toolsForm.tags.push(this.tagsControoler);
      this.errorTags();
      this.tagsControoler = "";
    } else {
      return;
    }
  }

  async createTools() {
    if (
      !this.error.title &&
      !this.error.link &&
      !this.error.description &&
      !this.error.tags
    ) {
      await this.store.dispatch("createTools", this.toolsForm);
      this.closeModal();
    } else {
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
.modalForm {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  padding: 25px 15px 30px;
  display: flex;
  flex-direction: column;
  width: 98%;
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
.combo-box-container {
  display: flex;
  align-items: center;
  min-height: 50px !important;
  height: auto !important;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
}
.combo-box {
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  font: normal normal normal 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
  color: #170c3a;
  padding: 8px;
  display: flex;
  align-items: center;
}
.button-add-tags {
  height: 20px;
  width: auto;
  margin-left: 10px;
  background-color: white !important;
  box-shadow: none;
}
.container-button-add {
  margin: 5px 0px;
  display: flex;
  align-items: center;
}
.button-fechar {
  align-self: flex-end;
  background-color: white !important;
  width: auto !important;
  box-shadow: none;
}
svg {
  fill: #10b26c;
}
.error {
  border: 1.5px solid red;
}

@media only screen and(min-width: 900px) {
  .modalForm {
    width: 900px;
    padding: 25px 20px 30px;
  }
}

@media only screen and (max-width: 450px) {
  .modalForm {
    height: 100%;
    padding: 20px 15px 0px;
  }
}
</style>
