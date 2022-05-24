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
