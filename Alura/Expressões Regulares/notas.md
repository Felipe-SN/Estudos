# Expressões Regulares

## Meta-chars

	. - qualquer valor.

## Quantifiers

	{n} - exatamente n vezes.

	{n,} - no minimo n vezes.

	{n,m} - no minimo n, no maximo m vezes.

	? - zero ou uma vez.

	+ - uma ou mais vezes.

	* - zero ou mais vezes.

## Classes de Char - []

	[A-Z] - letras de A até Z.

	[123] - 1,2 ou 3.

	\d - todos os digitos [0-9].

	\s - whitespace [ \t\r\n\f]

	\w - word char [A-Za-z0-9_]

## Grupos de Char - ()

	?: - non-capturing group (não deve ser mostrado no resultado final | (?:de\s+)?).

	| - significa OU | (alfa|beta).

	? - Significa opcional | (\w+)?.

	\n - back reference (faz referencia ao index do grupo) | ((G1).\w+\s+\1).

## Âncoras

	Âncora é uma forma de selecionar e retornar uma posição no valor que esta sendo analisado.

	\b - word boundary (não deve haver nada adjacente do valor analisado | ==>\b, \b<==).

	\B - non word boundary (deve haver algo adjacente do valor analisado | ==>\B, \B<==).

	^ - no inicio do valor analisado.

	$ - no final do valor analisado.