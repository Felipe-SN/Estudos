import Header from 'components/Header';
import styles from './Home.module.scss';
import { clock } from 'data/img.json';
import { router } from 'routes';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function Home() {
  const categorias = useSelector((state: RootState) => state.categorias);

  return (
    <div>
      <Header
        titulo="Classificados Tech"
        descricao="Compre diversos tipos de produtos no melhor site do Brasil!"
        imagem={clock}
        className={styles.header}
      />
      <div className={styles.categorias}>
        <div>
          <h1>Categorias</h1>
        </div>
        <div className={styles.categoriasContainer}>
          {categorias.map(categoria => (
            <div
              key={categoria.id}
              onClick={() => router.navigate(`/categoria/${categoria.id}`)}
            >
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
