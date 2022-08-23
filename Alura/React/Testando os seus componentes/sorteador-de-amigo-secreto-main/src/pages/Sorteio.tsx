import { useListaParticipantes } from 'state/hooks/useListaParticipantes';

const Sorteio = () => {
  const listaParticipantes = useListaParticipantes();
  return (
    <section>
      <h2>Quem vai tirar o papelzinho?</h2>
      <form>
        <select name="participanteDaVez" id="participanteDaVez">
          {listaParticipantes.map(participante => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
        <p>Clique em sortear para ver quem é seu amigo secreto!</p>
        <button>Sortear!</button>
        <span></span>
        <img src="img/aviao.png" alt="aviãozinho" />
      </form>
    </section>
  );
};

export default Sorteio;
