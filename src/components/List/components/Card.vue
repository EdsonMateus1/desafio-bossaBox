<template>
  <div class="card">
    <button @click="onClickModal" class="button-card button ">Excluir</button>
    <a class="title-link" :href="link">{{ title }}</a>
    <p class="description font-card">{{ description }}</p>
    <div class="flex-tags">
      <div
        v-for="tagsComputed in tagsComputeds"
        :key="tagsComputed"
        class="tags font-card"
      >
        {{ tagsComputed }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@/components/shared/Buttons/Button.vue";

@Options({
  props: {
    title: String,
    link: String,
    description: String,
    tags: Array,
    onClickModal: Function,
  },
  components: {
    Button,
  },
})
export default class Card extends Vue {
  title!: string;
  link!: string;
  description!: string;
  tags!: Array<string>;
  onClick!: Function;

  get tagsComputeds() {
    return this.tags.map((tag) => tag);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$fontColor: #170c3a;
$tagsColor: #10b26c;
.card {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 10px #0000000d;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.title-link {
  text-align: center;
  display: block;
  font: normal normal 600 30px/30px Source Sans Pro;
  letter-spacing: 0.48px;
  color: $fontColor;
  margin-bottom: 30px;
}
.description {
  letter-spacing: 0.36px;
  color: $fontColor;
  margin-bottom: 50px;
}
.font-card {
  font: normal normal normal 24px/24px Source Sans Pro;
}
.tags {
  text-align: left;
  color: $tagsColor;
  font-weight: bold;
  word-wrap: break-word;
}
.flex-tags {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.button-card {
  width: 6em;
  align-self: flex-end;
  padding: 5px;
  margin-bottom: 30px;
}

@media only screen and(min-width: 900px) {
  .flex-tags {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .button-card{
    margin-bottom: 0px;
  }
}
</style>
