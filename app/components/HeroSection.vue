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
    padding: var(--whitespace-primary);
    display: flex;
  }

  .header-text-container {
    background-color: var(--white);
    padding: 1rem;
    border: 0.5rem solid var(--primary-green);
    margin-top: 0;
    margin-left: -4rem;
    flex: 1;
    align-self: center;

    @media screen and (min-width: 992px) {
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

    @media (min-width: 992px) {
      margin: 0;
    }
  }

  img {
    max-width: 350px;
    width: 100%;

    @media (min-width: 992px) {
      width: 350px;
    }
  }
</style>
