import { useRecoilValue } from 'recoil';
import { listaEventosState } from 'state/atom';

const useListaEventos = () => {
  return useRecoilValue(listaEventosState);
};

export default useListaEventos;
