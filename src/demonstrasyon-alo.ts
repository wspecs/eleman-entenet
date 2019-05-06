import { LitElement, html, customElement, property } from 'lit-element';
import './double-panel';
import './markdown-view';
import './alo-alo';
import './attribute-list';
import './mod-attributes';
import './hero-info';
import { StringMap } from './types';
import { getElemanText } from './utils';

interface Store {
  aloAttributes: string[];
  aloMod: StringMap;
}

@customElement('demonstrasyon-alo')
export class DemonstrasyonAlo extends LitElement {
  @property({ type: Object }) store: Store = {
    aloAttributes: ['salitasyon', 'non', 'ponktyasyon'],
    aloMod: {
      salitasyon: "Sa k'ap fèt?",
      non: 'Haiti',
      ponktyasyon: '!!!!!'
    }
  };

  updateStore(e: { detail: { name: string; path: string; value: string } }) {
    (this.store as any)[e.detail.path][e.detail.name] = e.detail.value;
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
        title="Kèk egzanp eleman entènèt!"
        info="Kòman pou itilize attribi"
      ></hero-info>
      <double-panel class="full">
        <div class="center-grid" slot="left">
          <h3>Egzan yon eleman senp</h3>
          <attribute-list
            .attributes=${this.store.aloAttributes}
          ></attribute-list>
          <mod-attributes
            path="aloMod"
            .attributes=${this.store.aloMod}
            @modify=${this.updateStore}
          ></mod-attributes>
        </div>

        <div class="center-grid" slot="right">
          <h4>${getElemanText('alo-alo')}</h4>
          <alo-alo></alo-alo>
          <h4>
            ${getElemanText('alo-alo', `non="${this.store.aloMod.non}"`)}
          </h4>
          <alo-alo non="${this.store.aloMod.non}"></alo-alo>

          <h4>
            ${getElemanText(
              'alo-alo',
              `non="${this.store.aloMod.non}" salitasyon="${
                this.store.aloMod.salitasyon
              }"`
            )}
          </h4>
          <alo-alo
            non="${this.store.aloMod.non}"
            salitasyon="${this.store.aloMod.salitasyon}"
          ></alo-alo>

          <h4>
            ${getElemanText(
              'alo-alo',
              `ponktyasyon="${this.store.aloMod.ponktyasyon}" non="${
                this.store.aloMod.non
              }" salitasyon="${this.store.aloMod.salitasyon}"`
            )}
          </h4>
          <alo-alo
            non="${this.store.aloMod.non}"
            ponktyasyon="${this.store.aloMod.ponktyasyon}"
            salitasyon="${this.store.aloMod.salitasyon}"
          ></alo-alo>
        </div>
      </double-panel>
    `;
  }
}
