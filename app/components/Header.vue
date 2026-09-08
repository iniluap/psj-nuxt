<template>
  <header>
    <div class="header-container">
      <span class="logo">Paulina Sędłak-Jakubowska</span>
      <Nav />
    </div>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    padding: var(--whitespace-secondary);
    padding-right: 8rem;
    background-color: var(--primary-green);
    position: fixed;
    left: 0;
    top: 0;
    color: var(--white);
    box-shadow: var(--layered-shadow);
    z-index: 80;

    @media screen and (min-width: 992px) {
      padding-right: var(--whitespace-secondary);
    }
  }

  .header-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-family: 'Gilda Display', serif;
    font-size: 2rem;
  }
</style>
