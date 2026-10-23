<script setup lang="ts">
  import '~/assets/css/backgrounds.css';

  import { ref } from 'vue';

  definePageMeta({
    layout: 'blog'
  });
  useHead({
    title: 'Frontend journal'
  });

  const { data: articles } = await useAsyncData('article-', () => {
    return queryCollection('blog').order('date', 'ASC').all();
  });

  if (!articles.value) {
    throw createError({
      statusCode: 404,
      statusMessage: `Sorry, there aren't any articles to display`,
      fatal: true
    });
  }

  let [heroArticle] = articles.value.filter(
    (article) => article.articleIndex === 0
  );

  let filteredArticles = articles.value.filter(
    (article) => article.articleIndex !== 0
  );

  let focusEffect = ref({ articleIndex: 0, hasFocus: false });

  const setFocusEffect = (index: number): void => {
    focusEffect.value = { articleIndex: index, hasFocus: true };
  };
  const removeFocusEffect = (index: number): void => {
    focusEffect.value = { articleIndex: index, hasFocus: false };
  };
</script>

<template>
  <div class="blog-hero">
    <h1>Frontend journal</h1>
    <p>
      Follow along to learn more about my experience and recent programming
      adventures.
    </p>
  </div>
  <section
    class="blog-content"
    id="main-content">
    <div
      class="blog-hero-article"
      v-if="heroArticle">
      <BlogArticleIllustration
        :index="heroArticle.articleIndex"
        :focusEffect="focusEffect" />
      <BlogCardContent
        :article="heroArticle"
        @articleFocused="setFocusEffect(heroArticle.articleIndex)"
        @articleUnfocused="removeFocusEffect(heroArticle.articleIndex)" />
    </div>
    <div
      v-for="(article, index) in filteredArticles"
      :key="article.articleIndex"
      class="blog-article">
      <BlogArticleIllustration
        :index="article.articleIndex"
        :focusEffect="focusEffect" />
      <BlogCardContent
        :article="article"
        @articleFocused="setFocusEffect(article.articleIndex)"
        @articleUnfocused="removeFocusEffect(article.articleIndex)" />
    </div>
  </section>
</template>
