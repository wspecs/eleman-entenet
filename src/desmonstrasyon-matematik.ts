import { LitElement, html, customElement, property } from 'lit-element';
import './tab-matematik';
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

@customElement('desmonstrasyon-matematik')
export class DesmonstrasyonMatematik extends LitElement {
  @property({ type: Object }) store: Store = {
    attributes: ['kantite', 'nimewo'],
    mod: {
      nimewo: '17',
      kantite: '5'
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
        h4 {
          font-weight: 300;
          font-size: 16px;
          margin: 24px 0 12px 0;
        }
      </style>
      <hero-info
        title="Yon lòt egzan ak yon lòt eleman"
        info="Kòman pou itilize attribi"
      ></hero-info>
      <double-panel class="full">
        <div class="center-grid" slot="left">
          <div class="center-grid" slot="left">
            <h3>Egzan yon tab matematik</h3>
            <attribute-list
              .attributes=${this.store.attributes}
            ></attribute-list>
            <mod-attributes
              path="mod"
              .attributes=${this.store.mod}
              @modify=${this.updateStore}
            ></mod-attributes>
          </div>
        </div>
        <div class="center-grid" slot="right">
          <h4>
            ${getElemanText(
              'tab-matematik',
              `nimewo="${this.store.mod.nimewo}"`,
              `kantite="${this.store.mod.kantite}"`,
              'adisyon'
            )}
          </h4>
          <tab-matematik
            nimewo=${this.store.mod.nimewo}
            kantite=${this.store.mod.kantite}
            adisyon
          ></tab-matematik>
          <h4>
            ${getElemanText(
              'tab-matematik',
              `nimewo="${this.store.mod.nimewo}"`,
              `kantite="${this.store.mod.kantite}"`,
              'soustraksyon'
            )}
          </h4>
          <tab-matematik
            nimewo=${this.store.mod.nimewo}
            kantite=${this.store.mod.kantite}
            soustraksyon
          ></tab-matematik>

          <h4>
            ${getElemanText(
              'tab-matematik',
              `nimewo="${this.store.mod.nimewo}"`,
              `kantite="${this.store.mod.kantite}"`,
              'miltiplikasyon'
            )}
          </h4>
          <tab-matematik
            nimewo=${this.store.mod.nimewo}
            kantite=${this.store.mod.kantite}
            miltiplikasyon
          ></tab-matematik>

          <h4>
            ${getElemanText(
              'tab-matematik',
              `nimewo="${this.store.mod.nimewo}"`,
              `kantite="${this.store.mod.kantite}"`,
              'divizyon'
            )}
          </h4>
          <tab-matematik
            nimewo=${this.store.mod.nimewo}
            kantite=${this.store.mod.kantite}
            divizyon
          ></tab-matematik>
        </div>
      </double-panel>
    `;
  }
}
