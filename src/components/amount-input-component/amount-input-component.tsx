import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { getDecimalSeparator } from '../../utils/utils';

export interface ValidationError {
  [error: string]: string;
}

export type Validator = (value: any) => ValidationError | null;

export interface FormItemModel {
  value: string | number | undefined;
  validators: Array<Validator>;
}

export interface FormModel {
  fields: {
    [formItem: string]: FormItemModel;
  };
}

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

  private updateModel() {
    const calculatedValue = parseFloat(`${this.whole}.${this.decimals}`);
    this.update.emit({ ...this.model, value: calculatedValue });
  }

  private parseInput(value: string) {
    return value.replace(/[^0-9]/g, '');
  }

  private formatThousands(value: number) {
    return value ? this.whole.toLocaleString() : '';
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
          <input aria-label="whole" type="text" placeholder="0" aria-describedby="whole-input" maxlength="15" pattern="\d*" onInput={this.handleWholeChange.bind(this)} />
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
            onInput={this.handleDecimalsChange.bind(this)}
          />
        </div>
      </Host>
    );
  }
}
