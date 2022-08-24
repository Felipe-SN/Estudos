import shuffle from 'just-shuffle';

const realizarSorteio = (listaParticipantes: string[]) => {
  const totalParticipantes = listaParticipantes.length;
  const listaEmbaralhada = shuffle(listaParticipantes);
  const resultado = new Map<string, string>();

  for (let index = 0; index < totalParticipantes; index++) {
    const indexDoAmigo = index === totalParticipantes - 1 ? 0 : index + 1;
    resultado.set(listaEmbaralhada[index], listaEmbaralhada[indexDoAmigo]);
  }

  return resultado;
};

export default realizarSorteio;
