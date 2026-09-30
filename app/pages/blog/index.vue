<script setup lang="ts">
  definePageMeta({
    layout: 'blog'
  });

  const { data: articles } = await useAsyncData('article-', () => {
    return queryCollection('blog').order('date', 'DESC').all();
  });

  if (!articles.value) {
    throw createError({
      statusCode: 404,
      statusMessage: `Sorry, there aren't any articles to display`,
      fatal: true
    });
  }
</script>

<template>
  <h1 class="all-columns blog-hero">Blog</h1>
  <section class="all-columns blog-content">
    <div
      v-for="(article, index) in articles"
      :key="index"
      :class="{ 'blog-hero-article': index === 0 }">
      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>
      <p>{{ article.date }}</p>
      <p>Reading time: {{ article.minRead }} min</p>
    </div>
  </section>
</template>
