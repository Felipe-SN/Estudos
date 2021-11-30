export const removeDatasRepetidas = (datas) => {
	const datasUnicas = [];
	datas.forEach((data) => {
		if (datasUnicas.indexOf(data.dataFormatada) === -1) {
			datasUnicas.push(data.dataFormatada);
		}
	});

	return datasUnicas;
};

export const ordenaDatas = (data) => {
	data.sort((a, b) => {
		// eslint-disable-next-line no-undef
		const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
		// eslint-disable-next-line no-undef
		const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');

		return primeiraData - segundaData;
	});
};
