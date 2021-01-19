<template>
  <div :class="{ 'overflow-hidden': showModalCreate || showModalDelete }" class="layout">
    <Header />
    <div class="home padding">
      <List />
    </div>
    <transition name="leaving">
      <Create v-if="showModalCreate" />
    </transition>
    <transition name="leaving">
      <ConfirmDelete v-if="showModalDelete" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import List from "@/components/List/List.vue";
import Header from "@/components/Header/Header.vue";
import Input from "@/components/Inputs/input.vue";
import Create from "@/components/Create/Create.vue";
import ConfirmDelete from "@/components/ConfirmDelete/ConfirmDelete.vue";

import { useStore } from "vuex";
import { Store } from "@/interfaces/tools";
import store from "@/store";
@Options({
  components: {
    List,
    Header,
    Input,
    Create,
    ConfirmDelete,
  },
})
export default class Home extends Vue {
  private store = useStore<Store>();
  clossModal() {
    store.commit("controllerModal");
  }
  get showModalCreate() {
    return store.state.showModalCreate;
  }
  get showModalDelete() {
    return store.state.showModalDelete;
  }
}
</script>

<style lang="scss" scoped>
.overflow-hidden {
  overflow: hidden;
}

.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
.home {
  width: 100%;
  height: 100%;
}

.leaving-enter-active {
  transition: all 0.3s ease;
}

.leaving-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.leaving-enter {
  transform: translateY(100%);
  opacity: 0;
}
.leaving-enter-to {
}
.leaving-leave-to {
  opacity: 0;
  transform: scale(0);
}

@media only screen and (min-width: 900px) {
  .home {
    width: 80%;
  }
}
</style>
