export const tipoData = (date: Date) =>
  Intl.DateTimeFormat('pt-br', { dateStyle: 'short' }).format(date);

export const valorMoeda = (price: number) =>
  Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(price);
