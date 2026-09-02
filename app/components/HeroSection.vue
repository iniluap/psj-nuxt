<template>
  <section>
    <figure>
      <NuxtImg
        src="/header-image.png"
        loading="eager"
        alt="The photo of Paulina Sedlak-Jakubowska. A caucasian woman in her 30's, with shoulder length brown hair and big glasses. Wearing a green longsleeve. Sitting inside an office space."
        sizes="100vw md:350px" />
    </figure>
    <div class="header-text-container">
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
    @media screen and (min-width: 480px) {
      padding: var(--whitespace-primary);
      display: flex;
    }
  }

  .header-text-container {
    background-color: var(--white);
    padding: 1rem;
    border: 0.5rem solid var(--primary-green);
    margin-top: -6rem;
    flex: 1;
    align-self: center;

    @media screen and (min-width: 480px) {
      margin-left: -4rem;
      margin-top: 0;
    }

    @media screen and (min-width: 768px) {
      padding: var(--whitespace-primary);
    }
  }

  h1 {
    margin: 0.5rem 0;
    font-size: clamp(3rem, 5vw, 4rem);
  }

  strong {
    color: var(--primary-yellow);
    font-weight: 600;
    font-size: clamp(2rem, 4vw, 3rem);
  }

  figure {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: -1;

    @media (min-width: 992px) {
      margin: 0;
    }
  }

  img {
    width: 100%;

    @media (min-width: 480px) {
      width: 200px;
      height: 350px;
      object-fit: cover;
    }

    @media (min-width: 768px) {
      width: 350px;
      height: auto;
    }
  }
</style>
