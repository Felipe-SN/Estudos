import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listaParticipantesState } from 'state/atom';
import useMensagemErro from './useMensagemErro';

const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState<string[]>(listaParticipantesState);
  const { setMensagemErro } = useMensagemErro();
  const listaDeParticipantes = useRecoilValue(listaParticipantesState);

  return (nomeParticipante: string) => {
    if (listaDeParticipantes.includes(nomeParticipante)) {
      setMensagemErro('Nomes duplicados não são permitidos!');
      setTimeout(() => {
        setMensagemErro('');
      }, 3000);
      return;
    }
    return setLista(listaAntiga => [...listaAntiga, nomeParticipante]);
  };
};

export default useAdicionarParticipante;
