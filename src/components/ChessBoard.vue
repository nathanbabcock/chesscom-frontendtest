<script setup lang="ts">
const RANKS = '12345678'.split('')
const FILES = 'ABCDEFGH'.split('')

function selectSquare(n: number): void {
  const rankIndex = RANKS.length - Math.floor(n / 8) - 1
  const fileIndex = n % 8
  const label = `${FILES[fileIndex]}${RANKS[rankIndex]}`
  console.log(label)
}

</script>

<template>
  <div class="board">
    <div class="square" v-for="(_, i) in Array(64)" v-bind:key="i" v-on:click="selectSquare(i)" />
  </div>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  border: 3px solid white;
  border-radius: 5px;
  overflow: hidden;
  margin: 2em;
  width: calc(100vmin - 4em);
  height: calc(100vmin - 4em);
}

.square {
  border: 1px solid white;
}

/**
 * Enforce a square aspect ratio.
 * ⚠ May not work in older browsers: https://caniuse.com/mdn-css_properties_aspect-ratio
 * In a production-facing app this should be replaced with a backwards-compatible solution.
 */
.board,
.square {
  aspect-ratio: 1;
}

/** Repeating pattern every 2 rows; alternate/diagonal chessboard grid background */
.square:nth-child(16n + 1),
.square:nth-child(16n + 3),
.square:nth-child(16n + 5),
.square:nth-child(16n + 7),
.square:nth-child(16n + 10),
.square:nth-child(16n + 12),
.square:nth-child(16n + 14),
.square:nth-child(16n + 16) {
  background-color: rgba(255, 255, 255, 50%);
}
</style>
