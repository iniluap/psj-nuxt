<script setup lang="ts"></script>

<template>
  <div class="blog-article-illustration"></div>
</template>

<style lang="css" scoped>
  .blog-article-illustration {
    width: 100%;
    height: 18rem;
    margin-bottom: var(--whitespace-secondary);
    opacity: 0.8;
    position: relative;
    background:
      repeating-linear-gradient(
        -45deg,
        var(--light-grey) 0px,
        var(--light-grey) 5px,
        transparent 5px,
        transparent 8px
      ),
      repeating-linear-gradient(
        45deg,
        var(--light-grey) 0px,
        var(--light-grey) 5px,
        transparent 5px,
        transparent 8px
      ),
      linear-gradient(var(--secondary-blue), var(--secondary-blue));
    transition: all ease-in;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: var(--transition);
      opacity: 0;
      background:
        repeating-linear-gradient(
          -45deg,
          var(--secondary-blue) 0px,
          var(--secondary-blue) 5px,
          transparent 5px,
          transparent 8px
        ),
        repeating-linear-gradient(
          45deg,
          var(--secondary-blue) 0px,
          var(--secondary-blue) 5px,
          transparent 5px,
          transparent 8px
        ),
        linear-gradient(var(--light-grey), var(--light-grey));
    }
    &:hover {
      &::before {
        opacity: 1;
      }
    }

    .blog-hero-article & {
      @media screen and (min-width: 768px) {
        margin-bottom: 0;
      }
    }
  }
</style>
