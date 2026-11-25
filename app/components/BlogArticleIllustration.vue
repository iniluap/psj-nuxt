<template>
  <div
    class="article-background"
    :class="[
      `article-background-${index}`,
      hasFocusEffect() ? 'has-focus-effect' : ''
    ]"></div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    index: number;
    focusEffect: { articleIndex: number; hasFocus: boolean };
  }>();

  const hasFocusEffect = (): boolean => {
    return (
      props.focusEffect.articleIndex === props.index &&
      props.focusEffect.hasFocus
    );
  };
</script>

<style lang="css" scoped>
  .article-background {
    width: 100%;
    height: 18rem;
    margin-bottom: var(--whitespace-secondary);
    opacity: 0.8;
    position: relative;
    transition: var(--transition);

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: var(--transition);
      opacity: 0;
    }

    &.has-focus-effect {
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
