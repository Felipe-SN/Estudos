class Aviao {
  constructor(nome) {
    this._nome = nome;
  }

  voa() {
    alert(`${this._nome} está voando`);
  }

  ligaMotor() {
    console.log('liga o motor');
  }

  fechaPortas() {
    console.log('Portas sendo fechadas');
  }
}

// class Passarinho {
//   constructor(nome) {
//     this._nome = nome;
//   }

//   voa() {
//     // hum..precisamos implementar esse método também!
//   }

// }
// ----------------------------------------------------------------------
// Alterando nosso código para usar composição

// class Passarinho {
//   constructor(nome) {
//     this._nome = nome;
//     this._aviao = new Aviao(nome);
//   }

//   voa() {
//     this._aviao.voa();
//   }
// }

// ----------------------------------------------------------------------
// Reutilização de código através de mixin

class Passarinho {
  constructor(nome) {
    this._nome = nome;
  }

  voa() {
    Reflect.apply(Aviao.prototype.voa, this, []);
  }
}
