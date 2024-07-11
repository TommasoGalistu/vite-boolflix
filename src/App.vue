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
    requestApiFilm() {
      axios
        .get(store.urlRichiestaFilm)
        .then((risposta) => {
          store.arrayFilm = risposta.data.results;
          console.log("dati film: ", risposta.data.result);
        })
        .catch((error) => console.log("errore mio", error.message));
    },
    requestApiSerie() {
      axios
        .get(store.urlRichiestaSerie)
        .then((risposta) => {
          store.arraySerie = risposta.data.results;
          console.log("dati serie tv ", risposta.data.results);
        })
        .catch((error) => console.log("errore mio", error.message));
    },
  },
  mounted() {
    this.requestApiFilm();
    this.requestApiSerie();
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
</style>
