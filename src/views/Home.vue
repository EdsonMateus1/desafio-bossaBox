<template>
  <div :class="{'overflow-hidden': showModal}"  class="layout">
    <Header />
    <div class="divider"></div>
    <Input />
    <div class="divider"></div>
    <div class="home">
      <List />
    </div>
    <transition>
      <div @dblclick="clossModal" v-if="showModal" class="container-modal">
        <Create />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import List from "@/components/List/List.vue";
import Header from "@/components/Header/Header.vue";
import Input from "@/components/Inputs/input.vue";
import Create from "@/components/Create/Create.vue";
import { useStore } from "vuex";
import { Store } from "@/interfaces/tools";
import store from "@/store";
@Options({
  components: {
    List,
    Header,
    Input,
    Create,
  },
})
export default class Home extends Vue {
  private store = useStore<Store>();

  clossModal() {
    store.commit("controllerModal");
  }
  get showModal() {
    return store.state.showModal;
  }
}
</script>

<style lang="scss" scoped>
.container-modal {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.overflow-hidden{
  overflow: hidden;
}

.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.home {
  width: 100%;
  height: 100%;
  padding: 10px;
}

.v-enter {
  opacity: 0;
}

.v-enter-active {
  transition: all 0.4s;
}
.v-enter-to {
  opacity: 1;
}

.v-leave {
  opacity: 1;
}

.v-leave-active {
  transition: all 0.4s;
}
.v-leave-to {
  opacity: 0;
  transform: scale(1.2);
}
@media only screen and (min-width: 500px) {
  .home {
    width: 80%;
  }
}
</style>
