import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { Header } from '#components';

describe('Header component', () => {
  it('mounts correctly', async () => {
    const header = await mountSuspended(Header);
    expect(header.html()).toMatchSnapshot();
  });

  it('renders Nav component', async () => {
    const header = await mountSuspended(Header);
    const nav = header.findAll('nav');

    expect(nav.length).toBe(1);
  });
});
