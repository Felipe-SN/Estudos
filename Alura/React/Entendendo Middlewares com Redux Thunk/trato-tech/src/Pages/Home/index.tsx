import { adicionarCategorias } from 'store/reducers/categorias';
import { adicionarItens } from 'store/reducers/itens';
import { clock } from 'data/img.json';
import { router } from 'routes';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useEffect, useCallback } from 'react';
import Button from 'components/Button';
import Header from 'components/Header';
import instance from 'common/config/api';
import styles from './Home.module.scss';

export default function Home() {
  const dispatch = useAppDispatch();
  const categorias = useAppSelector(state => state.categorias);

  const buscarCategorias = useCallback(async () => {
    const resposta = await instance.get('/categorias');
    dispatch(adicionarCategorias(resposta.data));
  }, [dispatch]);

  const buscarItens = useCallback(async () => {
    const resposta = await instance.get('/itens');
    dispatch(adicionarItens(resposta.data));
  }, [dispatch]);

  useEffect(() => {
    buscarCategorias();
    buscarItens();
  }, [buscarCategorias]);

  return (
    <div>
      <Header
        titulo="Classificados Tech"
        descricao="Compre diversos tipos de produtos no melhor site do Brasil!"
        imagem={clock}
        className={styles.header}
      >
        <Button onClick={() => router.navigate(`/anuncie`)}>
          Quero anunciar
        </Button>
      </Header>
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
