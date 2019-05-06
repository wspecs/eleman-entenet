import { LitElement, html, customElement, property } from 'lit-element';

@customElement('p-endepandan')
export class PEndepandan extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
          font-family: var(--font-family, 'Open Sans');
        }
        p {
          color: red;
        }
      </style>
      <p>Mwen se yon paragraph, nan yon eleman pèsonalize!</p>
    `;
  }
}
