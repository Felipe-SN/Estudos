import { FormEvent, useEffect, useRef, useState } from 'react';
import useAdicionarParticipante from 'state/hooks/useAdicionarParticipante';

const Formulario = () => {
  const inputNome = useRef<HTMLInputElement>(null);
  const [nomeParticipante, setNomeParticipante] = useState<string>('');

  const adicionarNaLista = useAdicionarParticipante();
  const adicionarParticipante = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    adicionarNaLista(nomeParticipante);
    setNomeParticipante('');
    inputNome.current?.focus();
  };

  useEffect(() => {
    inputNome.current?.focus();
  }, []);

  return (
    <form onSubmit={adicionarParticipante}>
      <input
        onChange={e => setNomeParticipante(e.target.value)}
        placeholder="Insira os nomes dos participantes"
        ref={inputNome}
        type="text"
        value={nomeParticipante}
      />
      <button disabled={nomeParticipante.length < 3} type="submit">
        Adicionar
      </button>
    </form>
  );
};

export default Formulario;
