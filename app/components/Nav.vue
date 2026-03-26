<template>
  <nav>
      <ul class="ul-plain">
        <li>
          <NuxtLink to="/" class="nav-NuxtLink" aria-label="Go to Home page">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/work"
            class="nav-NuxtLink"
            aria-label="Go to How I work"
          >
            How I work
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/education"
            class="nav-NuxtLink"
            aria-label="Go to My Education"
          >
            My Education
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/community"
            class="nav-NuxtLink"
            aria-label="Go to Writing samples page"
          >
            Community work
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/projects"
            class="nav-NuxtLink"
            aria-label="Go to Projects page"
          >
            Projects
          </NuxtLink>
        </li>
      </ul>
    </nav>
</template>

<style scoped>
  nav {
    display: none;
    padding: var(--whitespace-secondary) 0;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: var(--whitespace-secondary);
  }
</style>