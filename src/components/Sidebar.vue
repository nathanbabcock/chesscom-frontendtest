<script setup lang="ts">
defineProps<{
  selectedSquares: number[]
}>()
</script>

<script lang="ts">
const RANKS = '12345678'.split('')
const FILES = 'ABCDEFGH'.split('')

function getLabel(n: number): string {
  const rankIndex = RANKS.length - Math.floor(n / 8) - 1
  const fileIndex = n % 8
  const label = `${FILES[fileIndex]}${RANKS[rankIndex]}`
  return label
}
</script>

<template>
  <aside class="sidebar">
    <h2>Selected Squares</h2>
    <ul class="squares-list">
      <li class="square-item" v-for="(square, i) in selectedSquares" v-bind:key="i">
        {{ getLabel(square) }}
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  background-color: rgba(255, 255, 255, 0.1);
  width: var(--sidebar-size);
  height: 100vh;
  overflow: auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
}

.squares-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: flex-start;
  gap: 1em;
}

.square-item {
  background: rgba(255, 255, 255, 10%);
  padding: 1em;
  border-radius: 0.25em;
  margin: 0;
}

@media (orientation: portrait) {
  .sidebar {
    flex-shrink: 0;
    width: 100vw;
    height: var(--sidebar-size);
  }

  .squares-list {
    flex-direction: row;
  }
}
</style>
