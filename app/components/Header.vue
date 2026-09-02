<template>
  <header>
    <div class="header-container">
      <span>Paulina Sedlak-Jakubowska</span>
      <Nav />
    </div>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    padding: var(--whitespace-primary);
    background-color: var(--primary-green);
    position: fixed;
    left: 0;
    top: 0;
    color: var(--white);
    box-shadow: var(--layered-shadow);
  }

  .header-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
