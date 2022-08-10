import { useSetRecoilState } from 'recoil';
import { listaParticipantesState } from 'state/atom';

const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState<string[]>(listaParticipantesState);

  return (nomeParticipante: string) => {
    return setLista(listaAntiga => [...listaAntiga, nomeParticipante]);
  };
};

export default useAdicionarParticipante;
