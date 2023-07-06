export const dateFormatter = (date: Date) => Intl.DateTimeFormat('pt-br', { dateStyle: 'short' }).format(date);

export const priceFormatter = (price: number) =>
  Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(price);
