import { useListaParticipantes } from './useListaParticipantes';
import useMensagemErro from './useMensagemErro';
import { listaParticipantesState } from 'state/atom';
import { useSetRecoilState } from 'recoil';

const useAdicionarParticipante = () => {
  const listaParticipantes = useListaParticipantes();
  const setListaParticipantes = useSetRecoilState(listaParticipantesState);
  const { setMensagemErro } = useMensagemErro();

  return (nomeParticipante: string) => {
    const ListaEmUpperCase = listaParticipantes.map(nome => nome.toUpperCase());
    const nomeParticipanteEmUpperCase = nomeParticipante.toUpperCase();

    if (ListaEmUpperCase.includes(nomeParticipanteEmUpperCase)) {
      setMensagemErro('Nomes duplicados não são permitidos!');
      setTimeout(() => {
        setMensagemErro('');
      }, 3000);
      return;
    }
    return setListaParticipantes(listaAntiga => [
      ...listaAntiga,
      nomeParticipante,
    ]);
  };
};

export default useAdicionarParticipante;
