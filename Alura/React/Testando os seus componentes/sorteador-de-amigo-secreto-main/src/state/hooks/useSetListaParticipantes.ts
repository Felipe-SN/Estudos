import { useSetRecoilState } from 'recoil';
import { listaParticipantesState } from 'state/atom';

export const useSetListaParticipantes = () => {
  return useSetRecoilState(listaParticipantesState);
};
