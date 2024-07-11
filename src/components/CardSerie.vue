<script>
import { store } from "../store";
export default {
  name: "CardSerie",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h3>Film</h3>
  <div class="container">
    <div class="card">
      <div class="textContent">
        <h2>Titolo</h2>
        <h4>Titolo originale</h4>
        <h4>lingua</h4>
        <span>valutazione</span>
        <i class="fa-regular fa-star"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-size: 3rem;
}
.container {
  background-color: black;
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 0.1rem;
  flex-wrap: wrap;
  justify-content: center;
  .card {
    background-color: grey;
    height: 30rem;
    width: calc((100% / 5) - 1.1rem);
    padding: 1rem;
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
}
</style>