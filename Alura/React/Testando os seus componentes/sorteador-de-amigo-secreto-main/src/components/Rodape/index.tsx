import { useListaParticipantes } from 'state/hooks/useListaParticipantes';

const Rodape = () => {
  const listaParticipantes = useListaParticipantes();

  return (
    <footer>
      <button disabled={listaParticipantes.length < 3}>
        iniciar brincadeira!
      </button>
      <div></div>
    </footer>
  );
};

export default Rodape;
