import { HeaderProps } from '..';
import styles from './SemImagem.module.scss';

export default function SemImagem(props: HeaderProps) {
  const { titulo, descricao, children } = props;
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <h2 className={styles.descricao}>{descricao}</h2>
        {children}
      </div>
    </>
  );
}
