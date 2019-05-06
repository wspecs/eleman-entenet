import { LitElement, html, customElement, property } from 'lit-element';

@customElement('hero-info')
export class HeroInfo extends LitElement {
  @property({ type: String }) title = 'Hero';
  @property({ type: String }) info = '';
  render() {
    return html`
      <style>
        :host {
          display: block;
          font-family: var(--font-family, 'Open Sans');
        }
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100vh;
        }
        h1 {
          font-size: 56px;
        }
        h1,
        h2 {
          font-weight: 300;
        }
      </style>
      <div class="container">
        <h1>${this.title}</h1>
        <h2>${this.info}</h2>
      </div>
    `;
  }
}
