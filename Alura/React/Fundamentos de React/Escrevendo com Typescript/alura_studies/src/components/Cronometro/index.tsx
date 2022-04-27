import { useEffect, useState } from 'react';
import Botao from '../Botao';
import ITarefa from '../../types/tarefa';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';
import tempoParaSegundos from '../../common/utils/time';

interface Props {
  selecionado: ITarefa | undefined;
  finalizaTarefa: () => void;
}

export default function Cronometro({ selecionado, finalizaTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    selecionado?.tempo && setTempo(tempoParaSegundos(selecionado.tempo));
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizaTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>Começar</Botao>
    </div>
  );
}
