<template>
  <nav
    ref="navRef"
    :class="[ isOpen ? 'open-nav' : 'close-nav' ]"
    :aria-hidden="!isOpen">
    <ul class="ul-plain">
      <li>
        <NuxtLink
          to="/"
          class="nav-NuxtLink"
          aria-label="Go to Home page"
          @click="setVisibility(false)">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/work"
          class="nav-NuxtLink"
          aria-label="Go to How I work"
          @click="setVisibility(false)">
          How I work
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/education"
          class="nav-NuxtLink"
          aria-label="Go to My Education"
          @click="setVisibility(false)">
          My Education
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/community"
          class="nav-NuxtLink"
          aria-label="Go to Writing samples page"
          @click="setVisibility(false)">
          Community work
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/projects"
          class="nav-NuxtLink"
          aria-label="Go to Projects page"
          @click="setVisibility(false)">
          Projects
        </NuxtLink>
      </li>
    </ul>
  </nav>
  <button
    v-if="isOpen"
    aria-label="Close menu"
    class="close-trigger"
    @click="setVisibility(false)">
    <Icon
      name="uil:xmark"
      title="Close menu" />
  </button>
  <button
    v-else
    aria-label="Open menu"
    class="open-trigger"
    @click="setVisibility(true)">
    <Icon
      name="uil:bars"
      title="Open menu" />
  </button>
</template>

<script setup lang="ts">
  const isOpen = useState('isOpen', () => false);

  const setVisibility = (value: boolean) => {
    isOpen.value = value;
  };
</script>

<style scoped>
  nav {
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--white);
    width: 100%;
    max-width: 400px;
    height: 100%;
    z-index: 10;
    padding: 4rem;
    box-shadow: 0px 2px 12px 0px rgb(46 41 51 / 8%);
    transition: var(--transition);

    &:target {
      right: 0;

      ~ .open-trigger {
        display: none;
      }

      ~ .close-trigger {
        display: block;
      }
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .open-nav {
    right: 0;
    display: block;
  }

  .close-nav {
    right: -100%;
    display: none;
  }

  button {
    background-color: var(--primary-yellow);
    color: white;
    width: 5rem;
    height: 5rem;
    position: fixed;
    right: 0.5rem;
    top: var(--whitespace-primary);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    box-shadow:
      0px 2px 12px 0px rgb(46 41 51 / 8%),
      0px 4px 14px 0px rgb(46 41 51 / 8%);
    cursor: pointer;
    transition: var(--transition);

    &:hover,
    &:focus {
      background-color: var(--secondary-blue);
      color: white;
      outline: var(--primary-yellow) auto 2px;
    }

    &.close-trigger {
      z-index: 20;
    }

    &.open-trigger {
      z-index: 100;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  li {
    margin-bottom: 3rem;
  }
</style>
