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
  <div class="blog-hero">
    <h1>Frontend journal</h1>
    <p>
      Follow along to learn more about my experience and recent programming
      adventures.
    </p>
  </div>
  <section class="blog-content">
    <div
      v-for="(article, index) in articles"
      :key="index"
      :class="[index === 0 ? 'blog-hero-article' : 'blog-article']">
      <BlogArticleIllustration />
      <div class="blog-article-data">
        <h2>{{ article.title }}</h2>
        <p class="blog-article-description">{{ article.description }}</p>
        <div class="blog-article-footer">
          <span>{{ article.date }}</span>
          <span>Reading time: {{ article.minRead }} min</span>
        </div>
      </div>
    </div>
  </section>
</template>
