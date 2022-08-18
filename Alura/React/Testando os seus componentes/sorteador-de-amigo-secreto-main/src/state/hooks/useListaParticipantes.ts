import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listaParticipantesState } from 'state/atom';

const useListaParticipantes = () => {
  const listaParticipantes = useRecoilValue(listaParticipantesState);
  const setListaParticipantes = useSetRecoilState(listaParticipantesState);

  return { listaParticipantes, setListaParticipantes };
};

export default useListaParticipantes;
