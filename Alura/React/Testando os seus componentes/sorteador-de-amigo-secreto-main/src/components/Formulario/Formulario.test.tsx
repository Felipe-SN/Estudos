import { render, screen } from '@testing-library/react';
import Formulario from '.';

describe('Teste de componente Formulario:', () => {
  test('Quando o input esta vazio, novos participantes não podem ser adicionados', () => {
    render(<Formulario />);

    // selecionar o input no documento
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );

    //selecionar o botão de 'Adicionar' no documento
    const botao = screen.getByRole('button');

    // se espera que o input esteja no documento
    expect(input).toBeInTheDocument();

    // estar desabilitado caso input esteja vazio.
    expect(botao).toBeDisabled();
  });
});
