import { LitElement, html, customElement, property } from 'lit-element';

@customElement('tab-matematik')
export class TabMatematik extends LitElement {
  @property({ type: Number }) nimewo = 1;
  @property({ type: Number }) kantite = 10;
  @property({ type: Boolean }) adisyon = false;
  @property({ type: Boolean }) soustraksyon = false;
  @property({ type: Boolean }) miltiplikasyon = false;
  @property({ type: Boolean }) divizyon = false;

  getRows(
    nimewo: number,
    kantite: number,
    adisyon: boolean,
    soustraksyon: boolean,
    miltiplikasyon: boolean,
    divizyon: boolean
  ) {
    const rows = [];
    if (kantite < 1) {
      kantite = 10;
    }
    for (let rowNumber = 1; rowNumber <= kantite; rowNumber++) {
      rows.push({
        rowNumber,
        sign: this.getSign(adisyon, soustraksyon, miltiplikasyon, divizyon),
        total: this.getTotal(nimewo, rowNumber)
      });
    }
    return rows;
  }

  getTotal(nimewo: number, rowNumber: number) {
    if (this.adisyon) return nimewo + rowNumber;
    if (this.soustraksyon) return nimewo - rowNumber;
    if (this.miltiplikasyon) return nimewo * rowNumber;
    if (this.divizyon && rowNumber !== 0) return nimewo / rowNumber;
    return nimewo + rowNumber;
  }

  getSign(
    adisyon: boolean,
    soustraksyon: boolean,
    miltiplikasyon: boolean,
    divizyon: boolean
  ) {
    if (adisyon) return '+';
    if (soustraksyon) return '-';
    if (miltiplikasyon) return '*';
    if (divizyon) return '/';
    return '+';
  }
  render() {
    return html`
      <style>
        :host {
          display: block;
          font-family: var(--font-family, 'Open Sans');
        }
        .tab-row {
          margin: 2px 0;
          padding: 0;
        }
        p {
          font-size: 18px;
        }
        .sign {
          color: darkblue;
        }
        .total {
          font-weight: 600;
        }
        .container {
          background: whitesmoke;
          padding: 16px;
        }
      </style>
      <div class="container">
        ${this.getRows(
          this.nimewo,
          this.kantite,
          this.adisyon,
          this.soustraksyon,
          this.miltiplikasyon,
          this.divizyon
        ).map(
          x =>
            html`
              <p class="tab-row">
                ${this.nimewo}
                <span class="sign">${x.sign}</span> ${x.rowNumber} =
                <span class="total">${x.total}</span>
              </p>
            `
        )}
      </div>
    `;
  }
}
