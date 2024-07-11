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
      axios
        .get(store.urlRichiesta)
        .then((risposta) => (store.arrayVideo = risposta.data.results))
        .catch((error) => console.log("errore mio", error.message));
    },
  },
  mounted() {
    this.requestApi();
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
</style>
