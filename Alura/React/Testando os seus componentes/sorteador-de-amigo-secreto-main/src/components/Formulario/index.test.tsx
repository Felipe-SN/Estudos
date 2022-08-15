import { act, fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Formulario from '.';

describe('Teste de comportamento do componente Formulario:', () => {
  test('Quando o input esta vazio, novos participantes não podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
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

  test('Adicionar um participante caso exista um nome preenchido', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // selecionar o input no documento
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    //selecionar o botão de 'Adicionar' no documento
    const botao = screen.getByRole('button');
    //inserir um valor no input
    fireEvent.change(input, { target: { value: 'Maria Silva' } });
    //clicar no botão adicionar
    fireEvent.click(botao);
    //garantir que o input receba o foco novamente
    expect(input).toHaveFocus();
    //garantir que o input esteja vazio
    expect(input).toHaveValue('');
  });

  test('Nomes duplicados não podem ser adicionados a lista de participantes', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const botao = screen.getByRole('button');
    fireEvent.change(input, { target: { value: 'Maria Silva' } });
    fireEvent.click(botao);
    // tenta adicionar um nome ja existente
    fireEvent.change(input, { target: { value: 'Maria Silva' } });
    fireEvent.click(botao);
    // seleciona a mensagem de erro na tela
    const mensagemDeErro = screen.getByRole('alert');
    // garante que a mensagem de erro foi exibida corretamente na tela
    expect(mensagemDeErro.textContent).toBe(
      'Nomes duplicados não são permitidos!'
    );
  });

  test('Mensagem de erro deve sumir apos os timers', () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const botao = screen.getByRole('button');
    fireEvent.change(input, { target: { value: 'Maria Silva' } });
    fireEvent.click(botao);
    // tenta adicionar um nome ja existente
    fireEvent.change(input, { target: { value: 'Maria Silva' } });
    fireEvent.click(botao);
    // seleciona a mensagem de erro na tela
    let mensagemDeErro = screen.queryByRole('alert');
    // verifica se a mensagem de erro foi exibida na tela
    expect(mensagemDeErro).toBeInTheDocument();
    // executa o timer para remover a mensagem de erro
    act(() => {
      jest.runAllTimers();
    });
    // captura o novo valor da mensagem de erro
    mensagemDeErro = screen.queryByRole('alert');
    // verifica se a mensagem de erro foi removida
    expect(mensagemDeErro).toBeNull();
  });
});
