import {
  AiFillCloseCircle,
  AiFillEdit,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineCheck,
  AiOutlineHeart,
} from 'react-icons/ai';
import { deletarItem, editarItem, mudarFavorito } from 'store/reducers/itens';
import { FaCartPlus } from 'react-icons/fa';
import { iconProps } from 'components/UI/variables';
import { memo, useState } from 'react';
import { mudarCarrinho, mudarQuantidade } from 'store/reducers/carrinho';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import classNames from 'classnames';
import formatadores from 'helpers/formatadores';
import Input from 'components/Input';
import ObjetoItem from 'types/ObjetoItem';
import styles from './Item.module.scss';

const IconQuantidadeProps = {
  size: 32,
  color: '#1875E8',
};

function Item({
  carrinho,
  descricao,
  favorito,
  foto,
  id,
  preco,
  quantidade,
  titulo,
}: ObjetoItem) {
  const dispatch = useAppDispatch();
  const [modoEdicao, setModoEdicao] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(titulo);
  const noCarrinho = useAppSelector(state =>
    state.carrinho.data.some(itemCarrinho => itemCarrinho.id === id)
  );

  const resolverFavorito = () => dispatch(mudarFavorito(id));
  const resolverCarrinho = () => dispatch(mudarCarrinho(id));
  const resolverDelete = () => dispatch(deletarItem(id));
  const resolverQuantidade = (numero: number) => {
    if (quantidade || numero > 0)
      dispatch(mudarQuantidade({ id, quantidade: numero }));
  };
  const resolverEditar = (edicaoAtivada: boolean) => {
    if (modoEdicao && novoTitulo !== titulo)
      dispatch(editarItem({ id, item: { titulo: novoTitulo } }));
    setModoEdicao(edicaoAtivada);
  };

  const ComponentModoEdicao = (
    <>
      {modoEdicao ? (
        <AiOutlineCheck
          {...iconProps}
          color="#041833"
          className={styles.itemAcao}
          onClick={() => resolverEditar(false)}
        />
      ) : (
        <AiFillEdit
          {...iconProps}
          color="#041833"
          className={styles.itemAcao}
          onClick={() => resolverEditar(true)}
        />
      )}
    </>
  );

  return (
    <div
      className={classNames(styles.item, {
        [styles.itemNoCarrinho]: carrinho,
      })}
    >
      <AiFillCloseCircle
        {...iconProps}
        color="#041833"
        className={`${styles.itemAcoes} ${styles.itemDeletar}`}
        onClick={resolverDelete}
      />
      <div className={styles.itemImagem}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles.itemDescricao}>
        <div className={styles.itemTitulo}>
          {modoEdicao ? (
            <Input
              onChange={e => setNovoTitulo(e.target.value)}
              placeholder="Nome do produto"
              type="text"
              value={novoTitulo}
            />
          ) : (
            <h2>{titulo}</h2>
          )}
          <p>{descricao}</p>
        </div>
        <div className={styles.itemInfo}>
          <div className={styles.itemPreco}>
            {formatadores.valorMoeda(preco)}
          </div>
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
              <>
                <FaCartPlus
                  {...iconProps}
                  color={noCarrinho ? '#1875E8' : '#041833'}
                  className={styles.itemAcao}
                  onClick={resolverCarrinho}
                />
                {ComponentModoEdicao}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Item);
