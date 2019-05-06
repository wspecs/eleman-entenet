import { LitElement, html, customElement, property } from 'lit-element';

@customElement('double-panel')
export class DoublePanel extends LitElement {
  @property({ type: String }) name = 'there';
  render() {
    return html`
      <style>
        :host {
          display: block;
          font-family: var(--font-family, 'Open Sans');
          --min-height: 400px;
        }
        :host(.full) {
          --min-height: calc(100vh - 96px);
        }
        .container {
          width: 100%;
          display: flex;
        }
        .left,
        .right {
          min-height: var(--min-height);
          flex-basis: 50%;
          padding: 48px;
        }
        .left {
          background: whitesmoke;
        }
        .right {
          background: gainsboro;
        }
      </style>
      <div class="container">
        <div class="left">
          <slot class="left" name="left"></slot>
        </div>
        <div class="right">
          <slot name="right"></slot>
        </div>
      </div>
    `;
  }
}
