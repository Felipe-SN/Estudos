import { useEffect, useState } from 'react';
import Botao from '../Botao';
import ITarefa from '../../types/tarefa';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';
import tempoParaSegundos from '../../common/utils/time';

interface Props {
  selecionado: ITarefa | undefined;
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    selecionado?.tempo && setTempo(tempoParaSegundos(selecionado.tempo));
  }, [selecionado]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao>Começar</Botao>
    </div>
  );
}
