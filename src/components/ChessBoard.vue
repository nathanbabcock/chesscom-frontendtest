<template>
  <div class="board">
    <div class="square" v-for="i in Array(63)" v-bind:key="i"/>
  </div>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  border: 3px solid white;
  border-radius:  5px;
  overflow: hidden;
  width: 100%;
  margin: 30px;
}

.square {
  border: 1px solid white;

  /* https://caniuse.com/mdn-css_properties_aspect-ratio */
  /* ⚠ May not work in older browsers */
  aspect-ratio: 1;
}
</style>
