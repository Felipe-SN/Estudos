export default function MensagensDeErroForm(
  errorType: string,
  minLengthValue?: number
) {
  const errorMessages: { [error: string]: string } = {
    min: 'Valor mínimo de R$1,00',
    minLength: minLengthValue
      ? `Digite no mínimo ${minLengthValue} carácter${
          minLengthValue > 1 && 'es'
        }`
      : 'Quantidade de Caracteres minima não alcançada',
    required: 'Campo obrigatório',
  };

  if (errorType in errorMessages) return errorMessages[errorType];
  return 'Erro desconhecido';
}
