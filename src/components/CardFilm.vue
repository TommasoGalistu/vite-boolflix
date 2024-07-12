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
    info: Object,
  },
  methods: {
    numberOfStar(voto) {
      let numeroStelle = Math.floor(voto / 2);
      let arrStelle = [];

      for (let i = 0; i < 5; i++) {
        if (i < numeroStelle) {
          // stelle piene
          arrStelle.push(["fas", "star"]);
        } else {
          // stelle vuote
          arrStelle.push(["far", "star"]);
        }
      }

      return arrStelle;
    },
  },
  mounted() {
    console.log(this.info.lingua.src);
  },
};
</script>

<template>
  <div v-if="info.tipo === 'film'" class="card flip-card">
    <div class="flip-card-inner">
      <div class="contLocandina flip-card-front">
        <div class="contImg">
          <img
            :src="`http://image.tmdb.org/t/p/original${info.valore.poster_path}`"
            :alt="`Poster di '${info.valore.title}'`"
          />
        </div>
      </div>
      <div class="textContent flip-card-back">
        <h2>{{ info.valore.title }}</h2>
        <h4>{{ info.valore.original_title }}</h4>
        <img
          :src="info.lingua.src"
          :srcset="info.lingua.srcset"
          :alt="info.lingua.alt"
        />
        <p>{{ `Voto medio ${Math.floor(info.valore.vote_average)}/10` }}</p>
        <div>
          <font-awesome-icon
            v-for="(icone, index) in numberOfStar(info.valore.vote_average)"
            :key="index"
            :icon="icone"
          />
        </div>
      </div>
    </div>
  </div>

  <div v-else-if="info.tipo === 'serie'" class="card flip-card">
    <div class="flip-card-inner">
      <div class="contLocandina flip-card-front">
        <div class="contImg">
          <img
            :src="`http://image.tmdb.org/t/p/original${info.valore.poster_path}`"
            :alt="`Poster di '${info.valore.name}'`"
          />
        </div>
      </div>
      <div class="textContent flip-card-back">
        <h2>{{ info.valore.name }}</h2>
        <h4>{{ info.valore.original_name }}</h4>
        <img
          :src="info.lingua.src"
          :srcset="info.lingua.srcset"
          :alt="info.lingua.alt"
        />
        <p>{{ `Voto medio ${Math.floor(info.valore.vote_average)}/10` }}</p>
        <div>
          <font-awesome-icon
            v-for="(icone, index) in numberOfStar(info.valore.vote_average)"
            :key="index"
            :icon="icone"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-size: 3rem;
}

.flip-card {
  background-color: transparent;
  height: 30rem;
  width: calc((100% / 4) - 0.2rem);
  perspective: 1000px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .contLocandina,
  .textContent {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .contLocandina {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotateY(0deg);
    background-color: #bbb;
    color: black;
  }

  .textContent {
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #2980b9;
    color: white;
    padding: 1rem;
  }

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
    padding: 1rem;
  }

  h4 {
    padding: 0.5rem;
  }
}

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
</style>