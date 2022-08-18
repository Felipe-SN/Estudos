import useListaParticipantes from './useListaParticipantes';
import useMensagemErro from './useMensagemErro';

const useAdicionarParticipante = () => {
  const { listaParticipantes, setListaParticipantes } = useListaParticipantes();
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
