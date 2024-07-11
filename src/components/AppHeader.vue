<script>
import { store } from "../store";
export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <h1>BoolFlix</h1>
    <div class="containerInput">
      <input type="text" placeholder="Cerca un film" />
      <button>Cerca</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: black;
  h1 {
    color: red;
  }
  .containerInput {
  }
}
</style>
