import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import type { DOMWrapper, VueWrapper } from '@vue/test-utils';
import { Nav } from '#components';

let nav: VueWrapper;
let navEl: DOMWrapper<HTMLElement>;
let buttonEl: DOMWrapper<HTMLButtonElement>;
let buttonIconEl: DOMWrapper<HTMLElement>;

describe('Nav component', () => {
  beforeEach(async () => {
    nav = await mountSuspended(Nav);
    navEl = nav.find('nav');
    buttonEl = nav.find('button');
    buttonIconEl = buttonEl.find('span');
  });

  afterEach(() => {
    nav.unmount();
  });

  it('mounts correctly', async () => {
    expect(nav.exists()).toBe(true);
    expect(nav.html()).toMatchSnapshot();
  });

  describe('when closed on mobile', () => {
    it('renders closed by default', async () => {
      expect(navEl.classes('is-closed-nav')).toBe(true);
      expect(buttonEl.classes('open-trigger')).toBe(true);
    });

    it('renders correct open trigger', async () => {
      expect(buttonEl.classes('open-trigger')).toBe(true);
      expect(buttonIconEl.classes('i-mdi:menu')).toBe(true);
    });

    it('opens on click event', async () => {
      await buttonEl.trigger('click');

      expect(nav.emitted());
      expect(navEl.classes('is-open-nav')).toBe(true);
      expect(buttonEl.classes('close-trigger')).toBe(true);
    });
  });

  describe('when opened on mobile', () => {
    it('renders correct close trigger', async () => {
      await buttonEl.trigger('click');

      expect(buttonEl.classes('close-trigger')).toBe(true);
      expect(buttonIconEl.classes('i-mdi:close')).toBe(true);
    });
  });
});
