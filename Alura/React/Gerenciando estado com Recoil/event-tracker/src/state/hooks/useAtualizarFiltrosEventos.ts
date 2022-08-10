import { IFiltroEventos } from 'interfaces/IFiltroEventos';
import { useSetRecoilState } from 'recoil';
import { filtroEventos } from 'state/atom';

const useAtualizarFiltrosEventos = () => {
  const setFiltrosEventos = useSetRecoilState<IFiltroEventos>(filtroEventos);
  return (filtro: IFiltroEventos) => setFiltrosEventos(filtro);
};

export default useAtualizarFiltrosEventos;
