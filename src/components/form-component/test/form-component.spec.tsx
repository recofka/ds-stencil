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
          <form class="form">
            <amount-input-component></amount-input-component>
              <button aria-label="Button Submit Form" class="btn" disabled title="Submit the Form" type="submit">
                Submit
              </button>
          </form>
        </mock:shadow-root>
      </form-component>
    `);
  });
});
