import { LitElement, html, customElement, property } from 'lit-element';
import './mod-input';
import { StringMap } from './types';

@customElement('mod-attributes')
export class ModAttributes extends LitElement {
  @property({ type: String }) path = '';
  @property({ type: Object }) attributes: StringMap = [];

  updateStore(e: { detail: {} }) {
    this.dispatchEvent(
      new CustomEvent('modify', {
        detail: e.detail
      })
    );
  }

  getAttributesPairs(attributes: StringMap) {
    return Object.entries(attributes).map(entry => ({
      name: entry[0],
      value: entry[1]
    }));
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          font-family: var(--font-family, 'Open Sans');
        }
        mod-input {
          margin-bottom: 12px;
        }
        h4 {
          font-weight: 300;
          font-size: 20px;
        }
      </style>
      <h4>Modify attribi eleman an!</h4>
      ${this.getAttributesPairs(this.attributes).map(
        x =>
          html`
            <mod-input
              name=${x.name}
              value=${x.value}
              path=${this.path}
              attribi=${x.name}
              @modify=${this.updateStore}
            ></mod-input>
          `
      )}
    `;
  }
}
