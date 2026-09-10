<template>
  <section>
    <HeroBackground />
    <figure>
      <NuxtImg
        src="/header-image.png"
        :preload="{ fetchPriority: 'high' }"
        loading="eager"
        alt="The photo of Paulina Sedlak-Jakubowska. A caucasian woman in her 30's, with shoulder length brown hair and big glasses. Wearing a green longsleeve."
        sizes="100vw md:290px"
        width="290" />
    </figure>
    <div class="hero-text-container">
      <h1>
        Hi, I'm Paulina
        <br />
        <strong>
          senior frontend engineer<br />
          & accessibility expert
        </strong>
      </h1>
    </div>
  </section>
</template>

<style scoped>
  section {
    position: relative;
    overflow-x: clip;
    grid-row: header-start;

    @media screen and (min-width: 480px) {
      display: flex;
      gap: 4rem;
    }

    @media screen and (min-width: 768px) {
      justify-content: center;
      gap: 14rem;
    }
  }

  .hero-text-container {
    padding: 1rem;

    @media screen and (min-width: 480px) {
      padding: 0;
      align-self: end;
    }

    @media screen and (min-width: 768px) {
      width: 340px;
    }
  }

  h1 {
    margin: 0;
    font-size: clamp(3rem, 5vw, 4rem);
  }

  strong {
    color: var(--secondary-rose);
    font-weight: 400;
    font-size: clamp(2rem, 3vw, 2.5rem);
  }

  figure {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 992px) {
      margin: 0;
    }
  }

  img {
    aspect-ratio: auto 290 / 516;
    width: 250px;
    object-fit: cover;
    object-position: right bottom;
    margin-left: 0;
    margin-right: auto;
  }
</style>
