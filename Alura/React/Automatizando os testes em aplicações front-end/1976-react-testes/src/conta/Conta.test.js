import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Conta from './Conta';

describe('Componente de Conta:', () => {
  it('Exibir saldo da conta como valor monetária', () => {
    render(<Conta saldo={1000} />);

    const saldo = screen.getByTestId('saldo-conta');

    expect(saldo.textContent).toBe('R$ 1000');
  });

  it('Quando o botão "Realizar operação" é clicado e não há um tipo de operação selecionado e um valor informado, a função realizarTransacao não deve ser executada', () => {
    const mockRealizarTransacao = jest.fn();

    render(<Conta saldo={1000} realizarTransacao={mockRealizarTransacao} />);

    const botao = screen.getByText('Realizar operação');

    fireEvent.click(botao);

    expect(mockRealizarTransacao).not.toHaveBeenCalled();
  });

  it('Chama a função de realizarTransacao, quando o botão "Realizar operação" é clicado e um tipo de operação é selecionado e um valor informado ', () => {
    const mockRealizarTransacao = jest.fn();

    render(<Conta saldo={1000} realizarTransacao={mockRealizarTransacao} />);

    const botao = screen.getByText('Realizar operação');
    const valor = screen.getByTestId('valor');
    const transacao = screen.getByLabelText('Saque');

    fireEvent.click(transacao, { target: { value: 'saque' } });
    fireEvent.change(valor, { target: { value: 10 } });
    fireEvent.click(botao);

    expect(mockRealizarTransacao).toHaveBeenCalled();
  });
});
