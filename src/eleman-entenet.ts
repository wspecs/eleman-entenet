import { LitElement, html, customElement, property } from 'lit-element';
import './demonstrasyon-alo';
import './desmonstrasyon-matematik';
import './desmonstrasyon-endepandan';

@customElement('eleman-entenet')
export class ElemanEntenet extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
          font-family: var(--font-family, 'Open Sans');
        }
        h4 {
          font-weight: 300;
          font-size: 16px;
          margin: 24px 0 12px 0;
        }
      </style>
      <demonstrasyon-alo></demonstrasyon-alo>
      <desmonstrasyon-matematik></desmonstrasyon-matematik>
      <desmonstrasyon-endepandan></desmonstrasyon-endepandan>
    `;
  }
}
