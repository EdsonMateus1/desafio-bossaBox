<template>
  <form @submit.prevent="submit" action="">
    <input v-model="v$.title.$model" type="text" name="" id="" />
    <button type="submit">submit</button>
  </form>
</template>

<script>
import useVuelidade from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { ref } from "vue";
import Create from "@/components/Create/Create.vue";

export default {
  setup() {
    const title = ref("");
    const rules = {
      title: { required },
    };
    const v$ = useVuelidade(rules, { title });

    function submit() {
      if (v$.value.$invalid) {
        console.log(v$.value);
      }
    }

    return {
      v$,
      title,
      submit,
    };
  },
};
</script>
