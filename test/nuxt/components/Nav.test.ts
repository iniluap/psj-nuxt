import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import type { DOMWrapper, VueWrapper } from '@vue/test-utils';
import { Nav } from '#components';

let nav: VueWrapper;
let navEl: DOMWrapper<HTMLElement>;
let buttonEl: DOMWrapper<HTMLButtonElement>;
let buttonIconEl: DOMWrapper<HTMLElement>;
let menuItem: DOMWrapper<HTMLElement>;

describe('Nav component', () => {
  beforeEach(async () => {
    nav = await mountSuspended(Nav);
    navEl = nav.find('nav');
    buttonEl = nav.find('button');
    buttonIconEl = buttonEl.find('span');
    menuItem = nav.find('a');
  });

  afterEach(() => {
    nav.unmount();
  });

  it('mounts correctly', async () => {
    expect(nav.exists()).toBe(true);
    expect(nav.html()).toMatchSnapshot();
  });

  describe('closed state on mobile', () => {
    it('renders closed by default', async () => {
      expect(navEl.classes('is-closed-nav')).toBe(true);
    });

    it('renders correct open trigger', async () => {
      expect(buttonEl.classes('open-trigger')).toBe(true);
      expect(buttonEl.attributes('aria-label')).toBe('Open menu');
      expect(buttonIconEl.classes('i-mdi:menu')).toBe(true);
    });
  });

  describe('open state on mobile', () => {
    it('opens on button click event', async () => {
      expect(navEl.classes('is-closed-nav')).toBe(true);

      await buttonEl.trigger('click');

      expect(nav.emitted());
      expect(navEl.classes('is-open-nav')).toBe(true);
      expect(buttonEl.classes('close-trigger')).toBe(true);
    });

    it('renders correct close trigger', async () => {
      expect(buttonEl.classes('close-trigger')).toBe(true);
      expect(buttonEl.attributes('aria-label')).toBe('Close menu');
      expect(buttonIconEl.classes('i-mdi:close')).toBe(true);
    });

    it('closes when menu item is selected', async () => {
      await menuItem.trigger('click');
      expect(navEl.classes('is-closed-nav')).toBe(true);
    });
  });
});
