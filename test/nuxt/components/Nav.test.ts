import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { Nav } from '#components';

describe('Nav component', () => {
  // refactor extract repeated parts
  it('mounts correctly', async () => {
    const nav = await mountSuspended(Nav);
    expect(nav.exists()).toBe(true);
    expect(nav.html()).toMatchSnapshot();
  });

  describe('when closed on mobile', () => {
    it('renders closed by default', async () => {
      const nav = await mountSuspended(Nav);
      const navEl = nav.find('nav');
      const buttonEl = nav.find('button');

      expect(navEl.classes('is-closed-nav')).toBe(true);
      expect(buttonEl.classes('open-trigger')).toBe(true);
    });

    it('renders correct open trigger', async () => {
      const nav = await mountSuspended(Nav);
      const buttonEl = nav.find('button');
      const buttonIconEl = buttonEl.find('span');

      expect(buttonEl.classes('open-trigger')).toBe(true);
      expect(buttonIconEl.classes('i-mdi:menu')).toBe(true);
    });

    it('opens on click event', async () => {
      const nav = await mountSuspended(Nav);
      const navEl = nav.find('nav');
      const buttonEl = nav.find('button');

      await buttonEl.trigger('click');

      expect(nav.emitted());
      expect(navEl.classes('is-open-nav')).toBe(true);
      expect(buttonEl.classes('close-trigger')).toBe(true);
    });
  });

  describe('when opened on mobile', () => {
    it('renders correct close trigger', async () => {
      // make sure test cases are separated
      const nav = await mountSuspended(Nav);
      const buttonEl = nav.find('button');
      const buttonIconEl = buttonEl.find('span');

      await buttonEl.trigger('click');

      expect(buttonEl.classes('close-trigger')).toBe(true);
      expect(buttonIconEl.classes('i-mdi:close')).toBe(true);
    });
  });
});
