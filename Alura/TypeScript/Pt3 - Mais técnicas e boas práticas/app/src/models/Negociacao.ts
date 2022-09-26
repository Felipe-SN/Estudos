import Modelo from '../interfaces/modelo.js';

class Negociacao implements Modelo<Negociacao> {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const regExp = /-/g;
    const date = new Date(dataString.replace(regExp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }

  paraTexto(): string {
    return `
    Data: ${this.data}
    Quantidade: ${this.quantidade}
    Valor: ${this.valor}
    Volume: ${this.volume}
    `;
  }

  ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() === negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear()
    );
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }
}

export default Negociacao;
