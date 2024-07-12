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
    isSimilar(titoloOriginale, titolo) {
      return titoloOriginale === titolo ? false : true;
    },
    isEmpty(valore) {
      return valore ? true : false;
    },
  },
  mounted() {
    console.log(this.info.lingua.src);
  },
};
</script>

<template>
  <!-- card dei film -->
  <div v-if="info.tipo === 'film'" class="card flip-card">
    <div class="flip-card-inner">
      <!-- card visibile all'apertura -->
      <div class="contLocandina flip-card-front">
        <div class="contImg">
          <img
            :src="`http://image.tmdb.org/t/p/original${info.valore.poster_path}`"
            :alt="`Poster di '${info.valore.title}'`"
          />
        </div>
      </div>
      <!-- card visibile all'hover con info -->
      <div class="textContent flip-card-back">
        <span><strong>Titolo: </strong>{{ info.valore.title }}</span>

        <span v-if="isSimilar(info.valore.original_title, info.valore.title)"
          ><strong>Titolo originale: </strong
          >{{ info.valore.original_title }}</span
        >

        <div v-if="isEmpty(info.valore.vote_average)">
          <span class="voto"><strong>Voto: </strong></span>
          <font-awesome-icon
            class="stelle"
            v-for="(icone, index) in numberOfStar(info.valore.vote_average)"
            :key="index"
            :icon="icone"
          />
        </div>
        <span v-if="isEmpty(info.valore.overview)"
          ><strong>Overview: </strong>{{ info.valore.overview }}</span
        >
        <div v-if="isEmpty(info.lingua.alt)" class="displayFlex">
          <span>Lingua: </span>
          <img
            :src="info.lingua.src"
            :srcset="info.lingua.srcset"
            :alt="info.lingua.alt"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- card delle serie -->
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
        <span><strong>Titolo: </strong>{{ info.valore.name }}</span>
        <span v-if="isSimilar(info.valore.original_name, info.valore.name)"
          ><strong>Titolo originale:</strong
          >{{ info.valore.original_name }}</span
        >
        <div v-if="isEmpty(info.valore.vote_average)">
          <span class="voto"><strong>Voto: </strong></span>
          <font-awesome-icon
            class="stelle"
            v-for="(icone, index) in numberOfStar(info.valore.vote_average)"
            :key="index"
            :icon="icone"
          />
        </div>
        <span v-if="isEmpty(info.valore.overview)"
          ><strong>Overview: </strong>{{ info.valore.overview }}</span
        >
        <div v-if="isEmpty(info.lingua.alt)" class="displayFlex">
          <span>Lingua: </span>
          <img
            :src="info.lingua.src"
            :srcset="info.lingua.srcset"
            :alt="info.lingua.alt"
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

    text-align: left;
    span {
      padding: 0.3rem;
      display: block;
    }
    span.voto {
      display: inline;
    }
    .displayFlex {
      display: flex;
      gap: 1rem;
    }
    .stelle {
      color: orange;
    }
  }

  .contLocandina {
    transform: rotateY(0deg);
    background-color: #bbb;
    color: black;
  }

  .textContent {
    transform: rotateY(180deg);
    flex-direction: column;
    background-color: black;
    border: 1px solid white;
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