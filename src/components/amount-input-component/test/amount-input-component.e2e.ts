import { newE2EPage } from '@stencil/core/testing';

describe('amount-input-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amount-input-component></amount-input-component>');

    const element = await page.find('amount-input-component');
    expect(element).toHaveClass('hydrated');
  });
});
