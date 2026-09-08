<template>
  <footer>
    <div class="footer-container">
      <ul class="ul-plain ul-links">
        <li>
          <a
            aria-label="Visit my linkedIn profile"
            href="https://www.linkedin.com/in/psjakubowska/"
            target="_blank"
            rel="noreferrer">
            <Icon
              name="uil:linkedin"
              title="LinkedIn accout of Paulina Sędłak-Jakubowska"
              aria-hidden="true" />
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
              aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            aria-label="Visit my Codepen profile"
            href="https://codepen.io/iniluap/">
            <Icon
              name="fa7-brands:codepen"
              aria-hidden="true" />
          </a>
        </li>
      </ul>
      <p>&copy; Paulina Sędłak-Jakubowska {{ date }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const date: number = new Date().getFullYear();
</script>

<style scoped>
  footer {
    background-color: var(--secondary-rose);
    padding: 0 var(--whitespace-secondary);
    grid-area: footer;
    text-align: center;
    color: var(--white);
  }

  .footer-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media screen and (min-width: 480px) {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: var(--whitespace-secondary);
    }
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
        scale: 1.5;
      }
    }

    @media screen and (max-width: 767px) {
      padding: 1rem;
    }
  }
</style>
