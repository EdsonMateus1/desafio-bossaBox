<template>
  <button @click.stop="onClick" class="button">
    {{ content }}
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  props: {
    content: String,
    onClick: Function,
  },
})
export default class Button extends Vue {
  content!: string;
}
</script>

<style lang="scss" scoped>
.button {
  font: normal normal 600 23px/24px Source Sans Pro;
}

</style>
