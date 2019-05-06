import { LitElement, html, customElement, property } from 'lit-element';
import './p-endepandan';
import './hero-info';
import './double-panel';
import './attribute-list';
import './mod-attributes';
import { StringMap } from './types';
import { getElemanText } from './utils';

interface Store {
  aloAttributes: string[];
  mod: StringMap;
}

@customElement('desmonstrasyon-endepandan')
export class DesmonstrasyonEndepandan extends LitElement {
  @property({ type: Object }) store: Store = {
    attributes: ['kantite', 'nimewo'],
    mod: {
      koulè: '#000000'
    }
  };

  updateStore(e: { detail: { name: string; path: string; value: string } }) {
    (this.store.mod as StringMap)[e.detail.name] = e.detail.value;
    this.requestUpdate();
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          font-family: var(--font-family, 'Open Sans');
        }
      </style>
      <hero-info title="Egzanp estil endepandan" info=""></hero-info>

      <double-panel>
        <div slot="left">
          <mod-attributes
            path="mod"
            .attributes=${this.store.mod}
            @modify=${this.updateStore}
          ></mod-attributes>
        </div>
        <div slot="right">
          <p-endepandan></p-endepandan>
          <p style="color: ${this.store.mod.koulè}">
            Mwen se yon nan eleman sa a
          </p>
          <p style="color: ${this.store.mod.koulè}">
            Mwen se yon nan eleman sa a
          </p>
          <p style="color: ${this.store.mod.koulè}">
            Mwen se yon nan eleman sa a
          </p>
          <p style="color: ${this.store.mod.koulè}">
            Mwen se yon nan eleman sa a
          </p>
        </div>
      </double-panel>
    `;
  }
}
