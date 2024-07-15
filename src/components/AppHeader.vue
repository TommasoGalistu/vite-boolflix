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
      <input
        v-model="store.inputUtente"
        type="text"
        placeholder="Cerca un film"
        @keyup.enter="$emit('searchInput')"
      />
      <button @click="$emit('searchInput')">Cerca</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../style/partial/variable.scss";
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: $colorHeader;
  position: fixed;
  z-index: 1000;
  width: 100%;
  h1 {
    color: $colorTextHeader;
  }
  .containerInput {
    input {
      height: 2rem;
      width: 15rem;
      margin-right: 0.5rem;
      padding-left: 0.5rem;
    }
    button {
      height: 2rem;
      padding: 0 0.5rem;
    }
  }
}
</style>
