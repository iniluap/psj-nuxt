<script setup lang="ts">
  definePageMeta({
    layout: 'default'
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
  <h1>Blog</h1>
  <section>
    <div
      v-for="(article, index) in articles"
      :key="index">
      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>
      <p>{{ article.date }}</p>
      <p>Reading time: {{ article.minRead }} min</p>
    </div>
  </section>
</template>
