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
    src: String,
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
    <div class="contLocandina">
      <div class="contImg">
        <img :src="`http://image.tmdb.org/t/p/original${src}`" alt="" />
      </div>
      <h2>{{ titolo }}</h2>
    </div>
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
  width: calc((100% / 4) - 0.2rem);
  // padding: 1rem;
  position: relative;

  &:hover .textContent {
    display: block;
  }
  &:hover .contLocandina {
    display: none;
  }
  .contLocandina {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .contImg {
      width: 100%;
      height: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    h2 {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);

      color: black; /* Text color */
      -webkit-text-stroke: 1px white; /* Border effect */
      text-align: center;
    }
  }
  .textContent {
    text-align: center;
    display: none;
    h2 {
      padding: 1rem;
    }
    h4 {
      padding: 0.5rem;
    }
  }
}
</style>