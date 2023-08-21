import { Component, Host, State, h } from '@stencil/core';
import { FormModel, ValidationError } from '../amount-input-component/amount-input-component';
import { required } from '../../utils/utils';

@Component({
  tag: 'form-component',
  styleUrl: 'form-component.css',
  shadow: true,
})
export class FormComponent {
  @State() errors: ValidationError | null;
  @State() model: FormModel = {
    fields: {
      amount: {
        value: 0,
        validators: [required],
      },
    },
  };

  private checkValidity(event) {
    const changedModel = event.detail;
    this.errors = changedModel.validators.reduce((acc, curr) => (!curr(changedModel.value) ? acc : { ...acc, ...curr(changedModel.value) }), null);
  }

  private handleSubmit(event: Event) {
    event.preventDefault();
    console.log('The form has been submitted');
    //clean inputs after submit
    // Proper submit message
  }

  render() {
    return (
      <Host>
        <form onSubmit={this.handleSubmit.bind(this)} class="form">
          <amount-input-component model={this.model.fields.amount} onUpdate={this.checkValidity.bind(this)}></amount-input-component>

          {/* To develop a proper user feedback for input errors
          {this.errors?.required ? console.log(this.errors?.required) : ' '} */}

          <button class="btn" type="submit" title="Submit the Form" aria-label="Button Submit Form">
            Submit
          </button>
        </form>
      </Host>
    );
  }
}
