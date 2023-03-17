import { useAppSelector } from 'store/hooks';
import { useParams } from 'react-router-dom';
import Header from 'components/Header';
import Item from 'components/Item';
import styles from './Categoria.module.scss';
import Button from 'components/Button';
import { router } from 'routes';

export default function Categoria() {
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
