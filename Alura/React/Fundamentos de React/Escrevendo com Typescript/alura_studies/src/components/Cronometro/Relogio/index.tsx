import style from './Relogio.module.scss';

interface Props {
  tempo: number | undefined;
}

export default function Relogio({ tempo = 0 }: Props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [minutosDezena, minutosUnidade] = String(minutos).padStart();
  const [segundosDezena, segundosUnidade] = String(segundos);
  return (
    <>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
    </>
  );
}
