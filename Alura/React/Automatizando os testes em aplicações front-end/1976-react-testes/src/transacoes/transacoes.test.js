import React from 'react';
import { render } from '@testing-library/react';
import Transacoes from './Transacoes';

describe('Componente de lista de transações do extrato', () => {
  it('O snapshot do componente deve permanecer sempre o mesmo', () => {
    const transacoes = [
      {
        data: '10/06/2022',
        id: 1,
        transacao: 'saque',
        valor: '10',
      },
      {
        data: '26/07/2022',
        id: 2,
        transacao: 'deposito',
        valor: '20',
      },
    ];

    const { container } = render(<Transacoes transacoes={transacoes} />);

    expect(container.childNodes).toMatchSnapshot();
  });
});
