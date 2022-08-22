import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListaParticipantes } from 'state/hooks/useListaParticipantes';
import Rodape from '.';

jest.mock('state/hooks/useListaParticipantes', () => ({
  useListaParticipantes: jest.fn(),
}));

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
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
      const listaParticipantes = useListaParticipantes();

      expect(listaParticipantes).toHaveLength(0);
      expect(botao).toBeDisabled();
    });
  });

  describe('Quando existem participantes suficientes', () => {
    const participantes = ['Ana', 'Pedro', 'Maria'];
    beforeEach(() => {
      (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    });
    test('A brincadeira pode ser iniciada', () => {
      render(
        <RecoilRoot>
          <Rodape />
        </RecoilRoot>
      );

      const botao = screen.getByRole('button');
      const listaParticipantes = useListaParticipantes();

      expect(listaParticipantes).toHaveLength(3);
      expect(botao).toBeEnabled();
    });

    test('A brincadeira foi iniciada', () => {
      render(
        <RecoilRoot>
          <Rodape />
        </RecoilRoot>
      );

      const botao = screen.getByRole('button');

      fireEvent.click(botao);

      expect(mockNavigate).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
    });
  });
});
