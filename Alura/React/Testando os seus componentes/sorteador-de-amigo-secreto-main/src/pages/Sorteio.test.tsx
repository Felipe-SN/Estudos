import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListaParticipantes } from 'state/hooks/useListaParticipantes';
import Sorteio from './Sorteio';

jest.mock('state/hooks/useListaParticipantes', () => ({
  useListaParticipantes: jest.fn(),
}));

describe('Na página de sorteio', () => {
  const participantes = ['Ana', 'Maria', 'Joel'];
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  test('Todos os participantes podem exibir seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole('option');

    expect(opcoes).toHaveLength(participantes.length);
  });
});
