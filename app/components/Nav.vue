<template>
  <nav
    aria-label="Main navigation"
    :class="[isOpen ? 'is-open-nav' : 'is-closed-nav']">
    <button
      :aria-label="isOpen ? 'Close menu' : 'Open menu'"
      aria-haspopup="true"
      aria-controls="menu-list"
      :aria-expanded="isOpen"
      :class="[isOpen ? 'close-trigger' : 'open-trigger']"
      @click="setVisibility(!isOpen)">
      <Icon
        :name="isOpen ? 'mdi:close' : 'mdi:menu'"
        size="2rem"
        aria-hidden="true" />
    </button>
    <ul
      id="menu-list"
      class="ul-plain"
      role="menu"
      aria-label="Main navigation">
      <li role="none">
        <NuxtLink
          role="menuitem"
          to="/"
          class="nav-link"
          @click="setVisibility(false)">
          Home
        </NuxtLink>
      </li>
      <li role="none">
        <NuxtLink
          role="menuitem"
          to="/work"
          class="nav-link"
          @click="setVisibility(false)">
          How I work
        </NuxtLink>
      </li>
      <li role="none">
        <NuxtLink
          role="menuitem"
          to="/education"
          class="nav-link"
          @click="setVisibility(false)">
          My Education
        </NuxtLink>
      </li>
      <li role="none">
        <NuxtLink
          role="menuitem"
          to="/community"
          class="nav-link"
          @click="setVisibility(false)">
          Community work
        </NuxtLink>
      </li>
      <li role="none">
        <NuxtLink
          role="menuitem"
          to="/projects"
          class="nav-link"
          @click="setVisibility(false)">
          Projects
        </NuxtLink>
      </li>
    </ul>
  </nav>
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

    @media screen and (min-width: 768px) {
      all: unset;
      padding: var(--whitespace-secondary) 0;
    }
  }

  .is-open-nav {
    right: 0;
  }

  .is-closed-nav {
    right: -100%;
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

  ul {
    @media screen and (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: var(--whitespace-secondary);
    }
  }

  li {
    margin-bottom: 3rem;

    @media screen and (min-width: 768px) {
      margin-bottom: unset;
    }
  }
</style>
