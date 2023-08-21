import { newSpecPage } from '@stencil/core/testing';
import { FormComponent } from '../form-component';

describe('form-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FormComponent],
      html: `<form-component></form-component>`,
    });
    expect(page.root).toEqualHtml(`
      <form-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </form-component>
    `);
  });
});
