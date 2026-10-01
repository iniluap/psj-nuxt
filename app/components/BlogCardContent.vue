<template>
  <div class="blog-article-data">
    <h2>{{ article.title }}</h2>
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
</script>

<style lang="css" scoped>
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
