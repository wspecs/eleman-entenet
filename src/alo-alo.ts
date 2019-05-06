import { LitElement, html, customElement, property } from 'lit-element';

@customElement('alo-alo')
export class AloAlo extends LitElement {
  @property({ type: String }) salitasyon = 'Alo';
  @property({ type: String }) non = 'Alo';
  @property({ type: String }) ponktyasyon = '!';
  render() {
    return html`
      <style>
        :host {
          display: block;
          font-family: var(--font-family, 'Open Sans');
        }
      </style>
      <span>${this.salitasyon} ${this.non}${this.ponktyasyon}</span>
    `;
  }
}
