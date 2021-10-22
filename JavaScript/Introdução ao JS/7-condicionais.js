console.log(`Trabalhando com Condicionais`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 15;
const estaAcompanhada = true;
const passagemCompada = true;

console.log("Destinos Possiveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade", "Destinos Disponiveis");
//     listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado!", "Destinos Disponiveis");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Não é maior de idade não é possivel efeuar a venda!");
// };

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Destinos Disponiveis");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior de idade não é possivel efeuar a venda!");
};

console.log("Embarque: \n\n");
if(idadeComprador >=18 || estaAcompanhada == true && passagemCompada == true){
    console.log("Boa Viagem!")
}else{
    console.log("Infelizmente não sera possivel o embarque!")
}

