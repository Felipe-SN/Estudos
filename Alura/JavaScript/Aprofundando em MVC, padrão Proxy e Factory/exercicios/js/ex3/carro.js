const $ = document.querySelector.bind(document);
const p = $('[data-info]');

let carro = {
  velocidade: 100,
  acelera: () => {
    console.log(this);
    p.textContent = `Carro a ${this.velocidade} km por hora!`;
    console.log(`Carro a ${this.velocidade} km por hora!`);
  },
};
carro.acelera();
