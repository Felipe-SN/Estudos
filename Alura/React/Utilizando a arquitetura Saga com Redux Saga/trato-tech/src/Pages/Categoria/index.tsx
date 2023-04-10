import { carregarUmaCategoria } from 'store/reducers/categorias';
import { router } from 'routes';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'components/Button';
import Header from 'components/Header';
import Item from 'components/Item';
import styles from './Categoria.module.scss';

export default function Categoria() {
  const dispatch = useAppDispatch();
  const { nomeCategoria } = useParams();
  const { categoria, itens } = useAppSelector(state => {
    const regExp = new RegExp(state.busca, 'i');

    return {
      categoria: state.categorias.find(
        categoria => categoria.id === nomeCategoria
      ),
      itens: state.itens.filter(
        item => item.categoria === nomeCategoria && item.titulo.match(regExp)
      ),
    };
  });

  useEffect(() => {
    dispatch(carregarUmaCategoria(nomeCategoria));
  }, [nomeCategoria]);

  return (
    <div>
      {categoria && (
        <Header
          titulo={categoria.nome}
          descricao={categoria.descricao}
          imagem={categoria.header}
        >
          <Button onClick={() => router.navigate(`/anuncie/${nomeCategoria}`)}>
            Quero anunciar
          </Button>
        </Header>
      )}
      {itens && (
        <div className={styles.itens}>
          {itens.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
