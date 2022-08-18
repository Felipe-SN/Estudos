import { useRecoilValue } from 'recoil';
import { listaParticipantesState } from 'state/atom';

export const useListaParticipantes = () => {
  return useRecoilValue(listaParticipantesState);
};
