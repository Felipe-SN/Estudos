import {
  AiFillEdit,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineCheck,
  AiOutlineHeart,
} from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { iconProps } from 'components/UI/variables';
import { mudarCarrinho, mudarQuantidade } from 'store/reducers/carrinho';
import { editarItem, mudarFavorito } from 'store/reducers/itens';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useState } from 'react';
import classNames from 'classnames';
import formatadores from 'helpers/formatadores';
import Input from 'components/Input';
import IObjetoItem from 'interfaces/IObjetoItem';
import styles from './Item.module.scss';

const IconQuantidadeProps = {
  size: 32,
  color: '#1875E8',
};

export default function Item(props: IObjetoItem) {
  const { titulo, descricao, foto, preco, favorito, id, carrinho, quantidade } =
    props;
  const dispatch = useAppDispatch();
  const [modoEdicao, setModoEdicao] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(titulo);
  const noCarrinho = useAppSelector(state =>
    state.carrinho.some(itemCarrinho => itemCarrinho.id === id)
  );

  const resolverFavorito = () => dispatch(mudarFavorito(id));
  const resolverCarrinho = () => dispatch(mudarCarrinho(id));
  const resolverQuantidade = (numero: number) => {
    if (quantidade)
      if (quantidade >= 1 || numero > 0)
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
