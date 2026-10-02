<script setup lang="ts">
  import '~/assets/css/backgrounds.css';
  import { withoutTrailingSlash } from 'ufo';

  const route = useRoute();
  const cleanPath = withoutTrailingSlash(route.path);

  const { data: article } = await useAsyncData('article-' + cleanPath, () => {
    return queryCollection('blog').path(cleanPath).first();
  });

  if (!article.value) {
    throw createError({
      statusCode: 404,
      statusMessage: `Sorry, we couldn't find that article`,
      fatal: true
    });
  }

  definePageMeta({
    layout: 'blog-article'
  });
  useHead({
    title: `${article.value.title}`
  });
</script>

<template>
  <section
    class="article-hero-section"
    :class="`article-background-${article?.articleIndex}`">
    <div class="article-hero-section-content">
      <NuxtLink
        to="/blog/"
        class="back-to-blog-link">
        <Icon
          name="mdi:arrow-left-circle"
          aria-hidden="true" />
        Go back
      </NuxtLink>
      <h1>{{ article?.title }}</h1>
    </div>
  </section>
  <ContentRenderer
    v-if="article"
    :value="article"
    class="content-container"
    id="main-content" />
</template>
