<script>
import { store } from "../store";
export default {
  name: "CardSerie",
  data() {
    return {
      store,
    };
  },
  props: {
    titoloSerie: String,
    titoloOriginSerie: String,
    linguaSerie: String,
    valutazioneSerie: Number,
  },
};
</script>

<template>
  <div class="card">
    <div class="textContent">
      <h2>{{ titoloSerie }}</h2>
      <h4>{{ titoloOriginSerie }}</h4>
      <h4>{{ linguaSerie }}</h4>
      <span>{{ valutazioneSerie }} </span>
      <i class="fa-regular fa-star"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-size: 3rem;
}

.card {
  background-color: grey;
  height: 30rem;
  width: calc((100% / 5) - 1.1rem);
  padding: 1rem;

  &:hover {
    background-color: rgb(58, 58, 58);
  }
  .textContent {
    text-align: center;
    h2 {
      padding: 1rem;
    }
    h4 {
      padding: 0.5rem;
    }
  }
}
</style>