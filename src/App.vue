<script setup lang="ts">
import ChessBoard from './components/ChessBoard.vue'
import Sidebar from './components/SideBar.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      selectedSquares: [] as number[]
    }
  },
  methods: {
    addSelectedSquare(n: number): void {
      this.selectedSquares.push(n)
    }
  }
}
</script>

<template>
  <Sidebar :selectedSquares="selectedSquares" />
  <ChessBoard :addSelectedSquare="addSelectedSquare" />
</template>
