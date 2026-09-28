import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { CardWrapper } from '#components';

describe('CardWrapper', () => {
  it('renders Card components within section element', async () => {
    const cardWrapper = await mountSuspended(CardWrapper, {
      slots: {
        default: '<div>Card 1</div><div>Card 2</div>'
      }
    });
    expect(cardWrapper.exists()).toBe(true);
    expect(cardWrapper.html()).toMatchInlineSnapshot(`
      "<section data-v-830e4bdc="">
        <div>Card 1</div>
        <div>Card 2</div>
      </section>"
    `);
  });
});
