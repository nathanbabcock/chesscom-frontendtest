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
  <div class="board-container">
    <div class="board">
      <div class="square" v-for="(_, i) in Array(64)" v-bind:key="i" v-on:click="selectSquare(i)" />
    </div>
  </div>
</template>

<style scoped>
.board-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.board {
  --board-margin: 2em;
  --long-side: calc(100vmax - var(--sidebar-size) - var(--board-margin) * 2);
  --short-side: calc(100vmin - var(--board-margin) * 2);
  --board-size: min(var(--long-side), var(--short-side));
  width: var(--board-size);
  height: var(--board-size);
  margin: var(--board-margin);
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  border: 3px solid white;
  border-radius: 5px;
  overflow: hidden;
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
