import { FormEvent, useEffect, useRef, useState } from 'react';
import useAdicionarParticipante from 'state/hooks/useAdicionarParticipante';
import useMensagemErro from 'state/hooks/useMensagemErro';

const Formulario = () => {
  const [nomeParticipante, setNomeParticipante] = useState<string>('');
  const inputNome = useRef<HTMLInputElement>(null);
  const { mensagemErro } = useMensagemErro();
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
      <div className="grupo-input-btn">
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
      </div>
      {mensagemErro && <span role="alert">{mensagemErro}</span>}
    </form>
  );
};

export default Formulario;
