class Relogio {
  constructor() {
    this._segundos = 0;
    const $ = document.querySelector.bind(document);
    const p = $('[data-info]');

    setInterval(() => (p.textContent = ++this._segundos), 1000);
  }
}

var relogio = new Relogio();
