import { describe, expect, it, beforeEach, vi } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { Footer } from '#components';

describe('Footer component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-01-15T00:00:00.000Z'));
  });

  it('mounts correctly', async () => {
    const footer = await mountSuspended(Footer);
    expect(footer.html()).toMatchSnapshot();
  });

  it('displays current year for the copyright note', async () => {
    const footer = await mountSuspended(Footer);
    const time = footer.find('time');

    expect(time.text()).toBe('2026');
  });
});
