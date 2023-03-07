import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { iconProps } from 'components/UI/variables';
import { mudarCarrinho, mudarQuantidade } from 'store/reducers/carrinho';
import { mudarFavorito } from 'store/reducers/itens';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { valorMoeda } from 'helpers/formatadores';
import classNames from 'classnames';
import styles from './Item.module.scss';

type ItemProps = {
  carrinho?: boolean;
  categoria: string;
  descricao: string;
  favorito: boolean;
  foto: string;
  id: string;
  preco: number;
  quantidade: number;
  titulo: string;
};

const IconQuantidadeProps = {
  size: 32,
  color: '#1875E8',
};

export default function Item(props: ItemProps) {
  const { titulo, descricao, foto, preco, favorito, id, carrinho, quantidade } =
    props;
  const dispatch = useAppDispatch();
  const noCarrinho = useAppSelector(state =>
    state.carrinho.some(itemCarrinho => itemCarrinho.id === id)
  );

  const resolverFavorito = () => dispatch(mudarFavorito(id));
  const resolverCarrinho = () => dispatch(mudarCarrinho(id));
  const resolverQuantidade = (numero: number) => {
    if (quantidade >= 1 || numero > 0)
      dispatch(mudarQuantidade({ id, quantidade: numero }));
  };

  return (
    <div
      className={classNames(styles.item, {
        [styles.itemNoCarrinho]: carrinho,
      })}
    >
      <div className={styles.itemImagem}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles.itemDescricao}>
        <div className={styles.itemTitulo}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles.itemInfo}>
          <div className={styles.itemPreco}>{valorMoeda(preco)}</div>
          <div className={styles.itemAcoes}>
            {favorito ? (
              <AiFillHeart
                {...iconProps}
                color="#ff0000"
                className={styles.itemAcao}
                onClick={resolverFavorito}
              />
            ) : (
              <AiOutlineHeart
                {...iconProps}
                color="#041833"
                className={styles.itemAcao}
                onClick={resolverFavorito}
              />
            )}
            {carrinho ? (
              <div className={styles.quantidade}>
                Quantidade:
                <AiFillMinusCircle
                  {...IconQuantidadeProps}
                  onClick={() => resolverQuantidade(-1)}
                />
                <span>{String(quantidade || 0).padStart(2, '0')}</span>
                <AiFillPlusCircle
                  {...IconQuantidadeProps}
                  onClick={() => resolverQuantidade(1)}
                />
              </div>
            ) : (
              <FaCartPlus
                {...iconProps}
                color={noCarrinho ? '#1875E8' : '#041833'}
                className={styles.itemAcao}
                onClick={resolverCarrinho}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
