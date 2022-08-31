import Card from 'components/Card';
import { useState } from 'react';
import { useListaParticipantes } from 'state/hooks/useListaParticipantes';
import { useResultadoSorteio } from 'state/hooks/useResultadoSorteio';
import './Sorteio.css';

const Sorteio = () => {
  const [participanteDaVez, setParticipanteDaVez] = useState('default');
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const listaParticipantes = useListaParticipantes();
  const resultado = useResultadoSorteio();

  const sortear = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (resultado.has(participanteDaVez))
      setAmigoSecreto(resultado.get(participanteDaVez)!);
  };

  return (
    <Card>
      <section className="sorteio">
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <div className="customSelect">
            <select
              className={participanteDaVez === 'default' ? 'valueDefault' : ''}
              id="participanteDaVez"
              name="participanteDaVez"
              onChange={e => setParticipanteDaVez(e.target.value)}
              placeholder="Selecione o seu nome"
              required
              value={participanteDaVez}
            >
              <option disabled hidden value="default">
                Selecione o seu nome
              </option>
              {listaParticipantes.map(participante => (
                <option key={participante}>{participante}</option>
              ))}
            </select>
          </div>
          <p>Clique em sortear para ver quem é seu amigo secreto!</p>
          <button className="botao-sortear">Sortear!</button>
        </form>
        {amigoSecreto && (
          <p className="resultado" role="alert">
            {amigoSecreto}
          </p>
        )}
      </section>
      <footer className="sorteio">
        <img
          alt="Um desenho de um avião de papel"
          className="aviao"
          src="img/aviao.png"
        />
      </footer>
    </Card>
  );
};

export default Sorteio;
