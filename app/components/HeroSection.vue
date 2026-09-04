<template>
  <section>
    <figure>
      <NuxtImg
        src="/header-image.png"
        loading="eager"
        alt="The photo of Paulina Sedlak-Jakubowska. A caucasian woman in her 30's, with shoulder length brown hair and big glasses. Wearing a green longsleeve."
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
    background-image: url('~/assets/images/blob.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top -6rem left 6rem;

    @media screen and (min-width: 480px) {
      padding: 4rem var(--whitespace-secondary) var(--whitespace-primary);
      background-size: 550px auto;
      background-position: -6rem 0;
      display: flex;
    }

    @media screen and (min-width: 768px) {
      background-position: 12rem 1rem;
    }
  }

  .header-text-container {
    padding: 1rem;
    align-self: end;

    @media screen and (min-width: 480px) {
      margin-left: 4rem;
      padding: 0;
    }

    @media screen and (min-width: 768px) {
      margin-left: 14rem;
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
    width: 100%;
    margin-left: -12rem;

    @media screen and (min-width: 480px) {
      margin-left: 0;
      width: 250px;
      height: 450px;
      object-fit: cover;
      object-position: right bottom;
    }

    @media screen and (min-width: 768px) {
      width: 350px;
      height: auto;
    }
  }
</style>
