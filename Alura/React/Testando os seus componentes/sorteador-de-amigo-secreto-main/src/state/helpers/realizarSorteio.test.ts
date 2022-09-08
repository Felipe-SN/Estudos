import realizarSorteio from './realizarSorteio';

describe('Dado um sorteio de amigo secreto', () => {
  test('Cada participante não deve sortear o próprio nome', () => {
    const participantes = [
      'Ana',
      'Maria',
      'Claudia',
      'Pedro',
      'Roberto',
      'Carlos',
    ];

    const sorteio = realizarSorteio(participantes);
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante);

      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
