<template>
  <div class="layout">
    <Header />
    <div class="divider"></div>
    <Input />
    <div class="divider"></div>
    <div class="home">
      <List />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import List from "@/components/List/List.vue";
import Header from "@/components/Header/Header.vue";
import Input from "@/components/Inputs/input.vue";

@Options({
  components: {
    List,
    Header,
    Input,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home {
  width: 100%;
  height: 100%;
  padding: 10px;
}
@media only screen and (min-width: 500px) {
  .home {
    width: 80%;
  }
}
</style>
