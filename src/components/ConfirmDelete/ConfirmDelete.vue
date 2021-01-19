<template>
  <ContainerModal class="container-modal-delete">
    <div class="confime-delete">
      <h1>ConfirmDelete</h1>
    </div>
  </ContainerModal>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ContainerModal from "@/components/ContainerModal/ContainerModal.vue";
@Options({
  components: {
    ContainerModal,
  },
})
export default class ConfirmDelete extends Vue {}
</script>

<style lang="scss" scoped>
.container-modal-delete {
  height: 500px !important;
  width: 500px !important;
}
</style>
