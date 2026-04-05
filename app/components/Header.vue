<template>
  <header>
    <figure>
      <NuxtImg
        src="/header-image.png"
        loading="eager"
        alt="The photo of Paulina Sedlak-Jakubowska. A caucasian woman in her 30's, with shoulder length brown hair and big glasses. Wearing a green longsleeve. Sitting inside an office space."
        sizes="100vw md:350px" />
    </figure>
    <div class="header-text-container">
      <h1>
        Paulina
        <br />
        Sedlak-Jakubowska
      </h1>
      <h2>
        senior frontend engineer<br />
        & accessibility expert
      </h2>
    </div>
  </header>
</template>

<style scoped>
  header {
    background-color: var(--white);
    box-shadow: var(--layered-shadow);

    @media screen and (min-width: 768px) {
      padding: var(--whitespace-primary);
      display: flex;
      background-color: var(--primary-green);
    }
  }

  .header-text-container {
    background-color: var(--white);
    padding: var(--whitespace-primary);

    @media screen and (min-width: 768px) {
      margin-top: 0;
      position: relative;
      left: -2rem;
      top: 0;
      flex: 1;
      align-self: center;
    }

    @media screen and (min-width: 1024px) {
      left: -4rem;
    }

    h1 {
      margin: 0.5rem 0;
      font-size: clamp(3rem, 6vw, 4rem);
    }

    h2 {
      color: var(--primary-yellow);
    }
  }

  figure {
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      margin: 0;
    }
  }

  img {
    max-width: 350px;
    width: 100%;

    @media (min-width: 768px) {
      width: 350px;
    }
  }
</style>
