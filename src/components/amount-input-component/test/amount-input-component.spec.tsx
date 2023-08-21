import { newSpecPage } from '@stencil/core/testing';
import { AmountInputComponent } from '../amount-input-component';

describe('amount-input-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmountInputComponent],
      html: `<amount-input-component></amount-input-component>`,
    });
    expect(page.root).toEqualHtml(`
      <amount-input-component>
        <mock:shadow-root>
          <div class="inputContainer">
            <input aria-describedby="whole-input" aria-label="whole" maxlength="15" pattern="\\d*" placeholder="0" type="text">
            <span>.</span>
            <input aria-describedby="decimals-input" aria-label="decimals" class="input-decimals" max="99" maxlength="2" min="0" pattern="\\d*" placeholder="00" type="text">
          </div>
        </mock:shadow-root>
      </amount-input-component>
    `);
  });
});

describe('AmountInputComponent', () => {
  it('emits the correct updated model value', async () => {
    const page = await newSpecPage({
      components: [AmountInputComponent],
      html: '<amount-input-component></amount-input-component>',
    });

    const amountInputComponent = page.rootInstance;
    const emittedEvents = [];

    page.win.document.addEventListener('update', (event: CustomEvent) => {
      emittedEvents.push(event.detail);
    });

    amountInputComponent['whole'] = 123;
    amountInputComponent['decimals'] = 45;

    amountInputComponent['updateModel']();
    await page.waitForChanges();

    expect(emittedEvents.length).toBe(1);
    expect(emittedEvents[0]).toEqual({
      ...amountInputComponent.model,
      value: 123.45,
    });
  });
});

describe('ParseInput()', () => {
  let component: AmountInputComponent;

  beforeEach(() => {
    component = new AmountInputComponent();
  });

  it('correctly parses input value', () => {
    const inputValue = 'abc123def45';
    const parsedValue = component['parseInput'](inputValue);
    expect(parsedValue).toBe('12345');
  });
});
