import { useState } from 'react';
import { useListaParticipantes } from 'state/hooks/useListaParticipantes';
import { useResultadoSorteio } from 'state/hooks/useResultadoSorteio';

const Sorteio = () => {
  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const listaParticipantes = useListaParticipantes();
  const resultado = useResultadoSorteio();

  const sortear = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (resultado.has(participanteDaVez))
      setAmigoSecreto(resultado.get(participanteDaVez)!);
  };

  return (
    <section>
      <h2>Quem vai tirar o papelzinho?</h2>
      <form onSubmit={sortear}>
        <select
          id="participanteDaVez"
          name="participanteDaVez"
          placeholder="Selecione o seu nome"
          required
          value={participanteDaVez}
          onChange={e => setParticipanteDaVez(e.target.value)}
        >
          {listaParticipantes.map(participante => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
        <p>Clique em sortear para ver quem é seu amigo secreto!</p>
        <button>Sortear!</button>
        {amigoSecreto && <span role="alert">{amigoSecreto}</span>}
        <img src="img/aviao.png" alt="aviãozinho" />
      </form>
    </section>
  );
};

export default Sorteio;
