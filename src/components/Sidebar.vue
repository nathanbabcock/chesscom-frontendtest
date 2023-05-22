<template>
  <aside class="sidebar" />
</template>

<style scoped>
.sidebar {
  background-color: rgba(255, 255, 255, 0.1);
  width: var(--sidebar-size);
  height: 100vh;
}

@media (orientation: portrait) {
  .sidebar {
    flex-shrink: 0;
    width: 100vw;
    height: var(--sidebar-size)
  }
}

</style>