import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from 'state/hooks/useListaParticipantes';

const Rodape = () => {
  const listaParticipantes = useListaParticipantes();

  const navigate = useNavigate();

  return (
    <footer>
      <button
        disabled={listaParticipantes.length < 3}
        onClick={() => navigate('/sorteio')}
      >
        iniciar brincadeira!
      </button>
      <div></div>
    </footer>
  );
};

export default Rodape;
