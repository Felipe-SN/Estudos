import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { iconProps } from 'components/UI/variables';
import { mudarFavorito } from 'store/reducers/itens';
import { valorMoeda } from 'helpers/formatadores';
import styles from './Item.module.scss';
import { useAppDispatch } from 'store/hooks';

export default function Item(props: ItemProps) {
  const { titulo, descricao, foto, preco, favorito, id } = props;
  const dispatch = useAppDispatch();

  const resolverFavorito = () => dispatch(mudarFavorito(id));

  return (
    <div className={styles.item}>
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

            <FaCartPlus
              {...iconProps}
              color={iconProps.size === 22 ? '#1875E8' : '#041833'}
              className={styles.itemAcao}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type ItemProps = {
  titulo: string;
  descricao: string;
  foto: string;
  favorito: boolean;
  preco: number;
  id: string;
  categoria: string;
};
