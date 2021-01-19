<template>
  <ContainerModal>
    <div class="confime-delete">
      <button class="button-close">
        <svg
          @click.stop="closeModal"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill=""
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
      <span class="text">Excluir tarefa</span>
      <div class="container-buttons">
        <button
          @click.stop="closeModal"
          class="button-decline font-button size-button"
        >
          Cancelar
        </button>
        <button
          @click.stop="confirm"
          class="button-confirme font-button size-button"
        >
          Excluir
        </button>
      </div>
    </div>
  </ContainerModal>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ContainerModal from "@/components/ContainerModal/ContainerModal.vue";
import { useStore } from "vuex";
import { Store } from "@/interfaces/tools";
@Options({
  components: {
    ContainerModal,
  },
})
export default class ConfirmDelete extends Vue {
  private store = useStore<Store>();
  closeModal() {
    this.store.commit("controllerModalDelete");
  }
  confirm() {
    const id = this.store.state.idTool;
    this.store.dispatch("deleteTool", id);
    this.store.commit("controllerModalDelete");
  }
}
</script>

<style lang="scss" scoped>
.confime-delete {
  width: 300px;
  height: 200px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Source Sans Pro;
}
.button-close {
  text-align: end;
}
.button-close:hover {
  cursor: default;
}
.button-close svg {
  fill: #000;
}
.button-close svg:hover {
  cursor: pointer;
}
.text {
  letter-spacing: 0.4px;
  color: #8f8a9b;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
}
.container-buttons {
  display: flex;
  justify-content: end;
  gap: 20px;
  align-items: center;
}
.font-button {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.36px;
}
.size-button {
  width: 122px;
  height: 50px;
}
.button-decline {
  background: #e1fdf2 0% 0% no-repeat padding-box;
  border-radius: 5px;
  text-align: center;
  color: #073a1a;
}
.button-confirme {
  background: #0dcb7d 0% 0% no-repeat padding-box;
  border-radius: 5px;
  text-align: center;
  color: #ffffff;
}
</style>
