import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from 'state/hooks/useListaParticipantes';
import { useSorteador } from 'state/hooks/useSorteador';
import './styles.css';

const Rodape = () => {
  const listaParticipantes = useListaParticipantes();
  const navigate = useNavigate();
  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navigate('/sorteio');
  };

  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={listaParticipantes.length < 3}
        onClick={() => iniciar()}
      >
        Iniciar brincadeira!
      </button>
      <img
        className="imagem-sacolas"
        src="/img/sacolas.png"
        alt="Sacolas de compras"
      />
    </footer>
  );
};

export default Rodape;
