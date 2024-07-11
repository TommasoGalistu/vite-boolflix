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
      <div class="containerFigure" v-else>
        <h3>Film</h3>
        <div class="containerCard">
          <CardFilm
            v-for="film in store.arrayFilm"
            :key="film.id"
            :titolo="film.title"
            :titoloOrigin="film.original_title"
            :lingua="film.original_language"
            :valutazione="film.vote_average"
          />
        </div>
        <h3>Serie Tv</h3>
        <div class="containerCard">
          <CardSerie
            v-for="serie in store.arraySerie"
            :key="serie.id"
            :titolo="serie.name"
            :titoloOrigin="serie.original_name"
            :lingua="serie.original_languag"
            :valutazione="serie.vote_average"
          />
        </div>
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
    .containerFigure {
      .containerCard {
        background-color: black;
        width: 100%;
        padding: 1rem;
        display: flex;
        gap: 0.1rem;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
