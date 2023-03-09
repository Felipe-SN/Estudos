import { HeaderProps } from '..';
import styles from './ComImagem.module.scss';

export default function ComImagem(props: HeaderProps) {
  const { className, descricao, imagem, titulo } = props;

  return (
    <div className={`${className} ${styles.header}`}>
      <div className={styles.headerTexto}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      <div className={styles.headerImagem}>
        <img src={imagem} alt={titulo} />
      </div>
    </div>
  );
}
