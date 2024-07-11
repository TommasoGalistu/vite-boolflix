<script>
import { store } from "../store";
export default {
  name: "CardFilm",
  data() {
    return {
      store,
    };
  },
  props: {
    titolo: String,
    titoloOrigin: String,
    lingua: Object,
    valutazione: Number,
  },
  methods: {
    flagInsert() {
      return ciao;
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="textContent">
      <h2>{{ titolo }}</h2>
      <h4>{{ titoloOrigin }}</h4>
      <img :src="lingua.src" :srcset="lingua.srcset" :alt="lingua.alt" />
      <p>{{ valutazione }}</p>
      <div>
        <font-awesome-icon :icon="['far', 'star']" />
        <font-awesome-icon :icon="['far', 'star']" />
        <font-awesome-icon :icon="['far', 'star']" />
        <font-awesome-icon :icon="['far', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
      </div>
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