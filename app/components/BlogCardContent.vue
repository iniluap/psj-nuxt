<template>
  <div class="blog-article-data">
    <h2>
      <NuxtLink
        :to="article.path"
        @focusin="$emit('article-focused')"
        @mouseenter="$emit('article-focused')"
        @focusout="$emit('article-unfocused')"
        @mouseleave="$emit('article-unfocused')"
        >{{ article.title }}</NuxtLink
      >
    </h2>
    <p class="blog-article-description">{{ article.description }}</p>
    <div class="blog-article-footer">
      <span>{{ article.date }}</span>
      <span>Reading time: {{ article.minRead }} min</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { BlogCollectionItem } from '@nuxt/content';

  defineProps<{
    article: BlogCollectionItem;
  }>();
  defineEmits(['article-focused', 'article-unfocused']);
</script>

<style lang="css" scoped>
  h2 a {
    display: block;
    color: var(--primary-green);
    transition: var(--transition);

    &:hover {
      color: var(--secondary-rose);
      font-weight: 700;
      letter-spacing: 0.23rem;
    }
  }

  .blog-article-data {
    display: flex;
    flex-direction: column;
    gap: var(--whitespace-secondary);

    * {
      margin: 0;
    }
  }

  .blog-article-description {
    flex-grow: 1;
  }

  .blog-article-footer {
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 480px) {
      flex-direction: row;
      justify-content: space-between;
      gap: var(--whitespace-secondary);
    }
  }
</style>
