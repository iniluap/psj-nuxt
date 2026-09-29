import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { HeroSection } from '#components';

describe('HeroSection component', () => {
  it('mounts correctly', async () => {
    const heroSection = await mountSuspended(HeroSection);
    expect(heroSection.html()).toMatchSnapshot();
  });
});
