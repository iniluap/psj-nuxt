import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { Card } from '#components';

describe('Card component', () => {
  it('mounts correctly', async () => {
    const card = await mountSuspended(Card);
    expect(card.exists()).toBe(true);
  });

  it('renders all slots', async () => {
    const card = await mountSuspended(Card, {
      slots: {
        default: 'My title',
        label: 'Company XYZ',
        date: '10-12-2026',
        description: 'That was a super project',
        resources: 'Linkedin'
      }
    });

    expect(card.html()).toMatchSnapshot();
  });

  it(`does not add 'card-extended', when resources slot is empty`, async () => {
    const card = await mountSuspended(Card, {
      slots: {
        default: 'My title',
        label: 'Company XYZ',
        date: '10-12-2026',
        description: 'That was a super project'
      }
    });

    expect(card.html()).toMatchSnapshot();
  });
});
