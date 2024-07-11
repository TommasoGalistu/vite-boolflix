<script>
import CardFilm from "./CardFilm.vue";
import CardSerie from "./CardSerie.vue";

import { store } from "../store";
export default {
  name: "AppMain",
  components: {
    CardFilm,
    CardSerie,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h1>Main</h1>
  <CardFilm />
  <CardSerie />
</template>

<style lang="scss" scoped>
</style>
