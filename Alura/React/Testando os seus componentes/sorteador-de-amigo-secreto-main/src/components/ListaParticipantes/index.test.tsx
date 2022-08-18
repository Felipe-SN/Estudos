import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import useListaParticipantes from 'state/hooks/useListaParticipantes';
import ListaParticipantes from '.';

jest.mock('state/hooks/useListaParticipantes');

describe('Comportamento do componente ListaParticipantes', () => {
  describe('Faz o render da lista de participantes sem elementos', () => {
    beforeEach(() => {
      (useListaParticipantes as jest.Mock).mockReturnValue(['Maria', 'José']);
    });

    test('A lista renderizada não deve conter elementos', () => {
      render(
        <RecoilRoot>
          <ListaParticipantes />
        </RecoilRoot>
      );

      const itens = screen.queryAllByRole('listitem');

      expect(itens).toHaveLength(0);
    });
  });

  describe('Faz o render da lista de participantes com elementos', () => {
    const participantes = ['Ana', 'Maria'];

    beforeEach(() => {
      (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    });

    test('A lista renderizada deve conter elementos', () => {
      render(
        <RecoilRoot>
          <ListaParticipantes />
        </RecoilRoot>
      );

      const itens = screen.queryAllByRole('listitem');

      expect(itens).toHaveLength(participantes.length);
    });
  });
});
