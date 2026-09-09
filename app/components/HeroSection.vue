<template>
  <section>
    <figure>
      <NuxtImg
        src="/header-image.png"
        :preload="{ fetchPriority: 'high' }"
        loading="eager"
        alt="The photo of Paulina Sedlak-Jakubowska. A caucasian woman in her 30's, with shoulder length brown hair and big glasses. Wearing a green longsleeve."
        sizes="100vw md:290px" />
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
    background: url('~/assets/images/blob.svg') top 0 left 6rem / contain
      no-repeat;
    grid-row: header-start;

    @media screen and (min-width: 480px) {
      background-size: 550px auto;
      background-position: -6rem 0;
      display: flex;
      gap: 4rem;
    }

    @media screen and (min-width: 768px) {
      background-position: 12rem 1rem;
      justify-content: center;
      gap: 14rem;
    }
  }

  .header-text-container {
    padding: 1rem;

    @media screen and (min-width: 480px) {
      padding: 0;
      align-self: end;
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
    width: 100%;
    max-width: 290px;
    margin-left: -12rem;

    @media screen and (min-width: 480px) {
      margin-left: 0;
      width: 250px;
      object-fit: cover;
      object-position: right bottom;
    }
  }
</style>
