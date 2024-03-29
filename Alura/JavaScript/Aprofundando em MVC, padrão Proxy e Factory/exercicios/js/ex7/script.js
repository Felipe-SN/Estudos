class Pessoa {
  constructor(nome) {
    this._nome = nome;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome;
  }

  grita(frase) {
    return `${this._nome} grita ${frase}`;
  }
}

// let pessoa = new Pessoa('Barney');
// pessoa.grita('Olá');

/*

let pessoa = new Proxy(new Pessoa('Barney'), {
  get(target, prop, receiver) {
    if (prop == 'grita' && typeof target[prop] == typeof Function) {
      // essa função retornada irá substituir o método 'grita' no proxy!!!
      // Ou seja, estamos usando o handler do proxy para modificar o próprio proxy, que loucura!
      return function () {
        console.log(`Método chamado: ${prop}`);
        // Quando usarmos Reflect.apply, Reflect.get e Reflect.set precisamos retornar o resultado da operação com return
        // arguments é uma variável implícita que dá acesso à todos os parâmetros recebidos pelo método/função
        return Reflect.apply(target[prop], target, arguments);
      };
    }
    // só executa se não for função
    return Reflect.get(target, prop, receiver);
  },
});

*/

let pessoa = new Proxy(new Pessoa('Barney'), {
  get(target, prop, receiver) {
    if (prop == 'grita' && typeof target[prop] == typeof Function) {
      return function () {
        console.log(
          `Interceptei o método: ${prop}, por isso estou exbindo essa mensagem!`
        );
        Reflect.apply(target[prop], target, arguments);
      };
    }
    return Reflect.get(target, prop, receiver);
  },
});

console.log(pessoa.grita('Olá'));
