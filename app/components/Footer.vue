<template>
  <footer>
    <ul class="m-top-3 ul-plain ul-links">
      <li>
        <a
          aria-label="Visit my linkedIn profile"
          href="https://www.linkedin.com/in/psjakubowska/"
          target="_blank"
          rel="noreferrer">
          <Icon
            name="uil:linkedin"
            title="LinkedIn accout of Paulina Sędłak-Jakubowska" />
        </a>
      </li>
      <li>
        <a
          aria-label="Visit my GitHub profile"
          href="https://github.com/iniluap"
          target="_blank"
          rel="noreferrer">
          <Icon
            name="uil:github"
            title="GitHub accout of Paulina Sędłak-Jakubowska" />
        </a>
      </li>
    </ul>
    <p>&copy; Paulina Sędłak-Jakubowska {{ date }}</p>
  </footer>
</template>

<script setup lang="ts">
  const date: number = new Date().getFullYear();
</script>

<style scoped>
  footer {
    background-color: var(--secondary-rose);
    padding: 0 var(--whitespace-primary);
    grid-area: footer;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--whitespace-primary);
    text-align: center;
    color: var(--white);
  }

  ul {
    margin-top: 1.5rem;
  }

  a {
    font-size: 2rem;

    .iconify {
      transition: var(--transition);
      color: var(--white);
    }

    &:hover {
      .iconify {
        color: var(--black);
        scale: 1.5;
      }
    }

    @media screen and (max-width: 767px) {
      padding: 1rem;
    }
  }
</style>
