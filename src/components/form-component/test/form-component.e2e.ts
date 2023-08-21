import { newE2EPage } from '@stencil/core/testing';

describe('form-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<form-component></form-component>');

    const element = await page.find('form-component');
    expect(element).toHaveClass('hydrated');
  });
});
