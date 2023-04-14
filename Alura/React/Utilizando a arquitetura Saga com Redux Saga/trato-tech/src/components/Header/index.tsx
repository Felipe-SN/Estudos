import ComImagem from './ComImagem';
import SemImagem from './SemImagem';
import styles from './Header.module.scss';

export type HeaderProps = {
  className?: string;
  descricao?: string;
  imagem?: string;
  titulo: string;
  children?: React.ReactNode;
};

export default function Header(props: HeaderProps) {
  const { className, descricao, imagem, titulo, children } = props;

  return (
    <header className={styles.header}>
      {imagem ? (
        <ComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        >
          {children}
        </ComImagem>
      ) : (
        <SemImagem titulo={titulo} descricao={descricao}>
          {children}
        </SemImagem>
      )}
    </header>
  );
}
