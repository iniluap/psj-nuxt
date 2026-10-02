import { beforeEach, describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import type { DOMWrapper, VueWrapper } from '@vue/test-utils';
import type { BlogCollectionItem } from '@nuxt/content';
import { BlogCardContent } from '#components';

let blogCard: VueWrapper;
let articleLink: DOMWrapper<HTMLAnchorElement>;

const article = {
  title: 'My blog post',
  description: 'My blog post description',
  minRead: 2,
  articleIndex: 0,
  date: '01-01-2025',
  path: 'www.example.com'
} as BlogCollectionItem;

describe('BlogCardContent', () => {
  beforeEach(async () => {
    blogCard = await mountSuspended(BlogCardContent, {
      props: { article }
    });
    articleLink = blogCard.find('a');
  });

  it('mounts correctly', () => {
    expect(blogCard.html()).toMatchSnapshot();
  });

  it(`emits 'article-focused' event on hover`, async () => {
    await articleLink.trigger('mouseenter');

    expect(blogCard.emitted('article-focused'));
  });

  it(`emits 'article-focused' event on focus`, async () => {
    await articleLink.trigger('focusin');

    expect(blogCard.emitted('article-focused'));
  });

  it(`emits 'article-unfocused' event on hover`, async () => {
    await articleLink.trigger('mouseleave');

    expect(blogCard.emitted('article-unfocused'));
  });

  it(`emits 'article-funocused' event on focus`, async () => {
    await articleLink.trigger('focusout');

    expect(blogCard.emitted('article-unfocused'));
  });
});
