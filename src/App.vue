<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";
import axios from "axios";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    requestApi() {
      if (store.inputUtente) {
        // variabili per modificare l'url
        let urlFilmModificato = store.urlRichiestaFilm;
        let urlSerieModificato = store.urlRichiestaSerie;
        // cambio i caratteri vuoti con il +
        // let inputModificato = store.inputUtente.split(" ").join("+");

        urlFilmModificato += store.inputUtente;
        urlSerieModificato += store.inputUtente;
        axios
          .get(urlFilmModificato)
          .then((risposta) => {
            store.arrayFilm = risposta.data.results;

            store.isSearch = true;

            // console.log("dati film: ", risposta.data.result);
          })
          .catch((error) => {
            store.isSearch = false;
            console.log("errore mio", error.message);
          });
        // dati dei telefilm
        axios
          .get(urlSerieModificato)
          .then((risposta) => {
            store.arraySerie = risposta.data.results;
            store.isSearch = true;
            // console.log("dati serie tv ", risposta.data.results);
          })
          .catch((error) => {
            store.isSearch = false;
            console.log("errore mio", error.message);
          });
      } else {
        store.isSearch = false;
      }
    },
  },

  mounted() {
    this.requestApi();
  },
};
</script>

<template>
  <AppHeader @searchInput="requestApi" />
  <AppMain />
</template>

<style lang="scss">
</style>
