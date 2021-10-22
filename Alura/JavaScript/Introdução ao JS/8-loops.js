console.log(`\nTrabalhando com Loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 15;
const estaAcompanhada = true;
let passagemCompada = false;
const destino = "Rio de Janeiro";

console.log("\nDestinos Possiveis");
console.log(listaDeDestinos);

const podeCompar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
// while(contador < 3){
//     if (listaDeDestinos[contador] == destino) {
//         console.log("Pesquisando seu destino...")
//         destinoExiste = true;
//         break;
//     };
//     contador += 1;
// };

for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        console.log("Pesquisando seu destino...")
        destinoExiste = true;
    };
};

console.log("Destino Existe:", destinoExiste);

if (podeCompar && destinoExiste) {
    console.log("Boa Viagem!");
} else {
    console.log("Não foi possivel realizar sua compra!");
};