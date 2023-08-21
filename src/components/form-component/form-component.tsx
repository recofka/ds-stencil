import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'form-component',
  styleUrl: 'form-component.css',
  shadow: true,
})
export class FormComponent {
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
          <div class="inputContainer">
            <input aria-label="whole" type="text" placeholder="0" aria-describedby="whole-input" />
            <span>.</span>
            <input aria-label="decimals" type="text" placeholder="00" aria-describedby="decimals-input" />
          </div>

          <button class="btn" type="submit" title="Submit the Form" aria-label="Button Submit Form">
            Submit
          </button>
        </form>
      </Host>
    );
  }
}
