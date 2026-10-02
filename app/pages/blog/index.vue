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
      v-for="(article, index) in articles"
      :key="index"
      :class="[index === 0 ? 'blog-hero-article' : 'blog-article']">
      <BlogArticleIllustration
        :index="index"
        :focusEffect="focusEffect" />
      <BlogCardContent
        :article="article"
        @articleFocused="setFocusEffect(index)"
        @articleUnfocused="removeFocusEffect(index)" />
    </div>
  </section>
</template>
