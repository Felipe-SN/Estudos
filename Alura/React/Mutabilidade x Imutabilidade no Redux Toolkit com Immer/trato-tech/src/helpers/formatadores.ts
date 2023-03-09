const data = (date: Date) =>
  Intl.DateTimeFormat('pt-br', { dateStyle: 'short' }).format(date);

const valorMoeda = (price: number) =>
  Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(price);

const formatadores = { valorMoeda, data };

export default formatadores;
