import { beforeEach, afterEach, describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { BlogArticleIllustration } from '#components';
import type { VueWrapper } from '@vue/test-utils';

describe('BlogArticleIllustration', () => {
  it('mounts correctly without focus effect', async () => {
    const blogArticleIllustration = await mountSuspended(
      BlogArticleIllustration,
      {
        props: {
          index: 0,
          focusEffect: {
            articleIndex: 0,
            hasFocus: false
          }
        }
      }
    );

    expect(blogArticleIllustration.html()).toMatchSnapshot();
    expect(
      blogArticleIllustration.find('div').classes('has-focus-effect')
    ).toBe(false);
  });

  describe('when receives focus event', () => {
    it('assigns background class when article index matches', async () => {
      const blogArticleIllustration = await mountSuspended(
        BlogArticleIllustration,
        {
          props: {
            index: 0,
            focusEffect: {
              articleIndex: 0,
              hasFocus: true
            }
          }
        }
      );

      expect(
        blogArticleIllustration.find('div').classes('has-focus-effect')
      ).toBe(true);
    });

    it('does not assign background class when article index is mismatched', async () => {
      const blogArticleIllustration = await mountSuspended(
        BlogArticleIllustration,
        {
          props: {
            index: 0,
            focusEffect: {
              articleIndex: 1,
              hasFocus: true
            }
          }
        }
      );

      expect(
        blogArticleIllustration.find('div').classes('has-focus-effect')
      ).toBe(false);
    });
  });
});
