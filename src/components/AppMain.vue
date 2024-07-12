<script>
import CardFilm from "./CardFilm.vue";

import { store } from "../store";
export default {
  name: "AppMain",
  components: {
    CardFilm,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    isEmptyFilm() {
      return store.arrayFilm.length > 0;
    },
    isEmptySeries() {
      return store.arraySerie.length > 0;
    },
    flagInsert(lingua) {
      let result;
      switch (lingua) {
        // https://www.bandiere-mondo.it/italia/scarica/icone
        case "ko":
          result = {
            src: "https://flagcdn.com/w40/kp.png",
            srcset: "https://flagcdn.com/w80/kp.png 2x",
            alt: "Corea del nord",
          };
          break;
        case "nl":
          result = {
            src: "https://flagcdn.com/w40/nl.png",
            srcset: "https://flagcdn.com/w80/nl.png 2x",
            alt: "Olanda",
          };
          break;
        case "de":
          result = {
            src: "https://flagcdn.com/w40/de.png",
            srcset: "https://flagcdn.com/w80/de.png 2x",
            alt: "Germania",
          };
          break;
        case "en":
          result = {
            src: "https://flagcdn.com/w40/um.png",
            srcset: "https://flagcdn.com/w80/um.png 2x",
            alt: "Stati Uniti d'America",
          };
          break;
        case "it":
          result = {
            src: "https://flagcdn.com/w40/it.png",
            srcset: "https://flagcdn.com/w80/it.png 2x",
            alt: "Italia",
          };
          break;
        case "es":
          result = {
            src: "https://flagcdn.com/w40/es.png",
            srcset: "https://flagcdn.com/w80/es.png 2x",
            alt: "Spagna",
          };
          break;
        case "ja":
          result = {
            src: "https://flagcdn.com/w40/jp.png",
            srcset: "https://flagcdn.com/w80/jp.png 2x",
            alt: "Giappone",
          };
          break;
        case "zh":
          result = {
            src: "https://flagcdn.com/w40/cn.png",
            srcset: "https://flagcdn.com/w80/cn.png 2x",
            alt: "Cina",
          };
          break;
        default:
          result = {
            src: `https://flagcdn.com/w40/${lingua}.png`,
            srcset: `https://flagcdn.com/w80/${lingua}.png 2x`,
            alt: `Bandiera ${lingua}`,
          };
      }
      return result;
    },
  },
  computed: {
    filmFiltred() {
      return store.arrayFilm.filter((film) => film.poster_path);
    },
    serieFiltred() {
      return store.arraySerie.filter((serie) => serie.poster_path);
    },
  },
};
</script>

<template>
  <div class="sfondo">
    <div class="container">
      <div class="contFirstText" v-if="!store.isSearch">
        <h3>Scegli un film nella barra di ricerca</h3>
      </div>
      <div class="containerFigure" v-else>
        <h3 v-if="isEmptyFilm">Film</h3>
        <div v-if="isEmptyFilm" class="containerCard">
          <CardFilm
            v-for="film in filmFiltred"
            :key="film.id"
            :info="{
              tipo: 'film',
              valore: film,
              lingua: flagInsert(film.original_language),
            }"
          />
        </div>
        <h3 v-if="isEmptySeries">Telefilm</h3>
        <div v-if="isEmptySeries" class="containerCard">
          <CardFilm
            v-for="serie in serieFiltred"
            :key="serie.id"
            :info="{
              tipo: 'serie',
              valore: serie,
              lingua: flagInsert(serie.original_language),
            }"
          />
        </div>
        <!-- <h3>Serie Tv</h3>
        <div class="containerCard">
          <CardSerie
            v-for="serie in store.arraySerie"
            :key="serie.id"
            :titoloSerie="serie.name"
            :titoloOriginSerie="serie.original_name"
            :linguaSerie="serie.original_language"
            :valutazioneSerie="serie.vote_average"
          />
        </div> -->
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
    .contFirstText {
      height: calc(100vh - 5rem);
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
