<template>
  <div class="header">
    <div class="title-container">
      <h1 class="title1">Vuttr</h1>
      <h2 class="title2">Very UseFull Tools to</h2>
      <h2 class="title2">Remember</h2>
    </div>
    <Button :onClick="reverseShowModal" content="Adiconar uma tarefa" />
    <transition>
      <Create v-show="showModal" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Button from "@/components/shared/Buttons/Button.vue";
import Create from "@/components/Create/Create.vue";

@Options({
  components: {
    Button,
    Create,
  },
})
export default class Header extends Vue {
  private showModal = false;

  reverseShowModal() {
    this.showModal = !this.showModal;
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.v-enter {
  opacity: 0;
  transform: scale(10);
}

.v-enter-active {
  transition: all 1s;
}
.v-enter-to {
  opacity: 1;
}



.v-leave {
  opacity: 1;
}

.v-leave-active {
  transition: all .5s;
}
.v-leave-to {
  opacity: 0;
  transform: scale(1.2);
}
</style>
