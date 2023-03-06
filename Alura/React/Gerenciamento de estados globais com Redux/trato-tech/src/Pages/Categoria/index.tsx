import { useParams } from 'react-router-dom';
import Header from 'components/Header';
import styles from './Categoria.module.scss';
import Item from 'components/Item';
import { useAppSelector } from 'store/hooks';

export default function Categoria() {
  const { nomeCategoria } = useParams();
  const { categoria, itens } = useAppSelector(state => ({
    categoria: state.categorias.find(
      categoria => categoria.id === nomeCategoria
    ),
    itens: state.itens.filter(item => item.categoria === nomeCategoria),
  }));

  return (
    <div>
      {categoria && (
        <Header
          titulo={categoria.nome}
          descricao={categoria.descricao}
          imagem={categoria.header}
        />
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
