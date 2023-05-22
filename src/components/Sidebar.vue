<template>
  <aside class="side-bar" />
</template>

<style scoped>
.side-bar {
  background-color: rgba(255, 255, 255, 0.1);
  width: var(--sidebar-size);
  height: 100vh;
}

@media (orientation: portrait) {
  .side-bar {
    flex-shrink: 0;
    width: 100vw;
    height: var(--sidebar-size)
  }
}

</style>