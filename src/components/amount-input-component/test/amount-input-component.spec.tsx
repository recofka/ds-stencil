import { newSpecPage } from '@stencil/core/testing';
import { AmountInputComponent } from '../amount-input-component';

describe('amount-input-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmountInputComponent],
      html: `<amount-input-component></amount-input-component>`,
    });
    // expect(page.root).toEqualHtml(`
    //   <amount-input-component>
    //     <mock:shadow-root>
    //       <slot></slot>
    //     </mock:shadow-root>
    //   </amount-input-component>
    // `);
  });
});
