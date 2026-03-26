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
  const date = new Date().getFullYear();
</script>

<style scoped>
  footer {
    grid-area: footer;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--whitespace-primary);
    text-align: center;
    color: var(--dark-grey);
  }

  a {
    font-size: 2rem;

    .fa-linkedin-in,
    .fa-github {
      transition: var(--transition);
      color: var(--secondary-blue);
    }

    &:hover {
      .fa-linkedin-in,
      .fa-github {
        color: var(--primary-yellow);
      }
    }

    @media screen and (max-width: 767px) {
      padding: 1rem;
    }
  }
</style>
