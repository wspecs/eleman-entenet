import { LitElement, html, customElement, property } from 'lit-element';

@customElement('attribute-list')
export class AttributeList extends LitElement {
  @property({ type: Array }) attributes: string[] = [];
  render() {
    return html`
      <style>
        :host {
          display: block;
          font-family: var(--font-family, 'Open Sans');
        }
        h3 {
          font-size: 28px;
          font-weight: 300;
        }
      </style>
      <h3>
        Eleman sa a genyen <strong>${this.attributes.length}</strong> attribi.
      </h3>
      <ul>
        ${this.attributes.sort().map(
          x =>
            html`
              <li>${x}</li>
            `
        )}
      </ul>
    `;
  }
}
