import { useRecoilValue, useSetRecoilState } from 'recoil';
import { erroState } from 'state/atom';

const useMensagemErro = () => {
  const setMensagemErro = useSetRecoilState<string>(erroState);
  const mensagemErro = useRecoilValue(erroState);

  return { mensagemErro, setMensagemErro };
};

export default useMensagemErro;
