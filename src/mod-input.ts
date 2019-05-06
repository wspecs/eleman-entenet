import { LitElement, html, customElement, property, query } from 'lit-element';

@customElement('mod-input')
export class ModInput extends LitElement {
  @query('input') input?: HTMLInputElement;
  @property({ type: String }) name = '';
  @property({ type: String }) value = '';
  @property({ type: String }) attribi = '';
  @property({ type: String }) path = '';

  onInput() {
    if (this.input && this.name) {
      this.dispatchChange(this.input.value);
    }
  }

  dispatchChange(value: string) {
    this.dispatchEvent(
      new CustomEvent('modify', {
        detail: {
          value,
          name: this.name,
          path: this.path
        }
      })
    );
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          font-family: var(--font-family, 'Open Sans');
        }
        input {
          padding: 8px;
          outline: none;
          background: white;
          font-size: 16px;
          width: 50%;
        }
      </style>
      <input
        @input=${this.onInput}
        value=${this.value}
        placeholder="${this.attribi}"
      />
    `;
  }
}
