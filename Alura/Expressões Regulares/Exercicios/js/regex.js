var alvo = '11a22b33c';
var exp = new RegExp('(\d\d)(\w)', 'g');

var resultado = exp.exec(alvo);

// while (resultado = exp.exec(textoTarget)) {

// 	if(resultado[0] === "") {
// 		throw Error("Regex retornou valor vazio.");
// 	}

// 	console.log("Resultado: " + resultado[0]);

// 	resultados.push(geraResultado(mostraGrupos ? resultado.join(' ||| ') : resultado[0], resultado.index, objetoRegex.lastIndex, mostraIndex));
// }
