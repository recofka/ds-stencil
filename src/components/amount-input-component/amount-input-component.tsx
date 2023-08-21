import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { getDecimalSeparator } from '../../utils/utils';
import { FormItemModel } from '../../model/form.model';

@Component({
  tag: 'amount-input-component',
  styleUrl: 'amount-input-component.css',
  shadow: true,
})
export class AmountInputComponent {
  /**
   * @prop {FormItemModel} model - The form item model containing value and validators.
   */
  @Prop() model: FormItemModel;

  /**
   * Emitted when the form item model is updated.
   * @event update
   */
  @Event() update: EventEmitter<FormItemModel>;

  private whole: number;
  private decimals: number;

  constructor() {
    // Bind event handlers to the class instance
    this.handleWholeChange = this.handleWholeChange.bind(this);
    this.handleDecimalsChange = this.handleDecimalsChange.bind(this);
  }

  private updateModel() {
    const calculatedValue = parseFloat(`${this.whole}.${this.decimals}`);
    this.update.emit({ ...this.model, value: calculatedValue });
  }

  private parseInput(value: string) {
    return value.replace(/[^0-9]/g, '');
  }

  private formatThousands(value: number) {
    return value !== 0 ? this.whole.toLocaleString() : '';
  }

  private handleWholeChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.whole = Number(this.parseInput(inputElement.value));

    inputElement.value = this.formatThousands(this.whole);

    this.updateModel();
  }

  private handleDecimalsChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.decimals = Number(this.parseInput(inputElement.value));

    inputElement.value = this.parseInput(inputElement.value);

    this.updateModel();
  }

  render() {
    return (
      <Host>
        <div class="inputContainer">
          <input aria-label="whole" type="text" placeholder="0" aria-describedby="whole-input" maxlength="15" pattern="\d*" onInput={this.handleWholeChange} />
          <span>{getDecimalSeparator()}</span>
          <input
            class="input-decimals"
            aria-label="decimals"
            type="text"
            placeholder="00"
            maxlength="2"
            min="0"
            max="99"
            aria-describedby="decimals-input"
            pattern="\d*"
            onInput={this.handleDecimalsChange}
          />
        </div>
      </Host>
    );
  }
}
