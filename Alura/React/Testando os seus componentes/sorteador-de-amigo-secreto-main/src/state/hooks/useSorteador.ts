import { useSetRecoilState } from 'recoil';
import { resultadoAmigoSecreto } from 'state/atom';
import realizarSorteio from 'state/helpers/realizarSorteio';
import { useListaParticipantes } from './useListaParticipantes';

const useSorteador = () => {
  const listaParticipantes = useListaParticipantes();
  const setResultado = useSetRecoilState(resultadoAmigoSecreto);

  return () => setResultado(realizarSorteio(listaParticipantes));
};

export default useSorteador;
