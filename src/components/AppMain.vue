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
  <div class="sfondo">
    <div class="container">
      <h3 v-if="!store.isSearch">Scegli un film nella barra di ricerca</h3>
      <div v-else>
        <CardFilm />
        <CardSerie />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sfondo {
  background-color: grey;
  color: rgb(181, 181, 181);
  .container {
    width: 90%;
    margin: auto;
    padding-top: 5rem;

    h3 {
      font-size: 3rem;
    }
  }
}
</style>
