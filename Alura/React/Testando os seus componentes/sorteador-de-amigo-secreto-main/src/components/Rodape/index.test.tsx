import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListaParticipantes } from 'state/hooks/useListaParticipantes';
import Rodape from '.';

jest.mock('state/hooks/useListaParticipantes', () => ({
  useListaParticipantes: jest.fn(),
}));

describe('Comportamento do componente Rodape', () => {
  describe('Onde não existem participantes suficientes', () => {
    beforeEach(() => {
      (useListaParticipantes as jest.Mock).mockReturnValue([]);
    });
    test('A brincadeira não pode ser iniciada', () => {
      render(
        <RecoilRoot>
          <Rodape />
        </RecoilRoot>
      );

      const botao = screen.getByRole('button');
      const participantes = useListaParticipantes();

      expect(participantes).toHaveLength(0);
      expect(botao).toBeDisabled();
    });
  });
});
