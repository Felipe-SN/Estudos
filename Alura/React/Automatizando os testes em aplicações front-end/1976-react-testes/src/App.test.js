import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App, { calcularNovoSaldo } from './App';

describe('Componente principal', () => {
  describe('Ao abrir o app do banco:', () => {
    it('O nome do banco é exibido', () => {
      render(<App />);
      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    });

    it('O saldo é exibido', () => {
      render(<App />);
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    });

    it('O botão de transação é exibido', () => {
      render(<App />);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    });
  });

  describe('Ao realizar uma operação:', () => {
    it('De saque, o saldo vai diminuir', () => {
      const valores = {
        transacao: 'saque',
        valor: 50,
      };

      const novoSaldo = calcularNovoSaldo(valores, 150);

      expect(novoSaldo).toBe(100);
    });

    it('De saque, a transação dos valores deve ser realizada', () => {
      const { getByLabelText, getByTestId, getByText } = render(<App />);

      const botaoTransacao = getByText('Realizar operação');
      const saldo = getByText('R$ 1000');
      const transacao = getByLabelText('Saque');
      const valor = getByTestId('valor');

      expect(saldo.textContent).toBe('R$ 1000');

      fireEvent.click(transacao, { target: { value: 'saque' } });
      fireEvent.change(valor, { target: { value: 10 } });
      fireEvent.click(botaoTransacao);

      expect(saldo.textContent).toBe('R$ 990');
      expect().toBe();
      expect().toBe();
    });
  });
});
