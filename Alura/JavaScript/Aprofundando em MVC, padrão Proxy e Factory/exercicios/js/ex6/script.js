const titulo = document.querySelector('.info');

// const funcionario = new Proxy(
//   { email: 'abc@abc.com' },
//   {
//     get(target, prop, receiver) {
//       if (prop === 'email') console.log('Armadilha aqui');
//       return `**${Reflect.get(target, prop, receiver)}**`;
//     },
//   }
// );

class Funcionario {
  constructor(email) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }
}

const funcionario = new Proxy(new Funcionario('abc@abc.com'), {
  set(target, prop, value, receiver) {
    console.log(
      `Propriedade: ${prop}\nValor Anterior: ${target[prop]}\nValor Atual: ${value}`
    );
    return Reflect.set(target, prop, value, receiver);
    // target[prop] = value;
  },
});

funcionario.email = 'cba@cba.com';

/*

const funcionario = new Proxy(new Funcionario('abc@acb.com'), {
  get(target, prop, receiver) {
    console.log(`Propriedade acessada: ${prop}\nIt's a trap!`);
    return Reflect.get(target, prop, receiver);
  },
});

console.log(funcionario.email);

*/

/*
let funcionario = new Proxy(
  { email: 'abc@abc.com' },
  {
    set(target, prop, value, receiver) {
      console.log(`Valor antigo:\n${target[prop]}\nValor atual:\n${value}`);
      return Reflect.set(target, prop, value, receiver);
      // target[prop] = value;
    },
  }
);

funcionario.email = 'cba@cba.com';
*/
