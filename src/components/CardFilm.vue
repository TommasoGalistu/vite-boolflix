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
  <div v-if="info.tipo === 'film'" class="card">
    <div class="contLocandina">
      <div class="contImg">
        <img
          :src="`http://image.tmdb.org/t/p/original${info.valore.poster_path}`"
          :alt="`Poster di '${info.valore.title}'`"
        />
      </div>
    </div>
    <div class="textContent">
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

  <div v-else-if="info.tipo === 'serie'" class="card">
    <div class="contLocandina">
      <div class="contImg">
        <img
          :src="`http://image.tmdb.org/t/p/original${info.valore.poster_path}`"
          :alt="`Poster di '${info.valore.name}'`"
        />
      </div>
    </div>
    <div class="textContent">
      <h2>{{ info.valore.name }}</h2>
      <h4>{{ info.valore.original_name }}</h4>
      <img
        :src="info.lingua.src"
        :srcset="info.lingua.srcset"
        :alt="info.lingua.alt"
      />
      <p>{{ info.valore.vote_average }}</p>
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