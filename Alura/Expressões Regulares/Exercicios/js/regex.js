var alvo = '11a22b33c';
// var exp = new RegExp('(\\d\\d)(\\w)', 'g');
var exp = /(\d\d)(\w)/g;
// var resultado = exp.exec(alvo);
var resultado = '';
// console.log(resultado);
// console.log(exp.lastIndex);

while ((resultado = exp.exec(alvo))) {
	if (resultado[0] === '') {
		throw Error('Regex retornou valor vazio.');
	}

	console.log(`Resultado: ${resultado} Posição: ${exp.lastIndex}`);

	// resultados.push(geraResultado(mostraGrupos ? resultado.join(' ||| ') : resultado[0], resultado.index, objetoRegex.lastIndex, mostraIndex));
}

//Alterando formato de data

var data = '01-01-2022';
var exp = /-/g;
data = data.replace(exp, '/');
console.log(`Valor Alterado: ${data} Posição: ${exp.lastIndex}`);

//Utilizando 'split'

var arquivo = '100,200-150,200;20';
var exp = /[,;-]/g;
var valores = arquivo.split(exp);
var valoresConvertidos = [];
for (let i = 0; i < valores.length; i++) {
	var int = parseFloat(valores[i]);
	valoresConvertidos.push(int);
}
console.log(valoresConvertidos);
