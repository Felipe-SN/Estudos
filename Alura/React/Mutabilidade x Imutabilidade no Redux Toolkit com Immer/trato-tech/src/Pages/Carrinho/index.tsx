import { resetCarrinho } from 'store/reducers/carrinho';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import Button from 'components/Button';
import formatadores from 'helpers/formatadores';
import Header from 'components/Header';
import IObjetoItem from 'interfaces/IObjetoItem';
import Item from 'components/Item';
import styles from './Carrinho.module.scss';

type CheckoutList = IObjetoItem[];

export default function Carrinho() {
  const dispatch = useAppDispatch();
  const { carrinho, total } = useAppSelector(state => {
    let total = 0;
    const regExp = new RegExp(state.busca, 'i');
    const carrinhoReduce = state.carrinho.reduce(
      (itens: CheckoutList, itemNoCarrinho) => {
        const item = state.itens.find(item => item.id === itemNoCarrinho.id);
        if (item) {
          total += item.preco * itemNoCarrinho.quantidade;
          if (item.titulo.match(regExp))
            itens.push({ ...item, quantidade: itemNoCarrinho.quantidade });
        }
        return itens;
      },
      []
    );
    return { carrinho: carrinhoReduce, total };
  });

  return (
    <div>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira os produtos que você adicionou ao carrinho"
      />
      <div className={styles.carrinho}>
        {carrinho.map(item => (
          <Item key={item.id} {...item} carrinho />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>{formatadores.valorMoeda(total)}</strong>
          </span>
        </div>
        <Button onClick={() => dispatch(resetCarrinho())}>
          Finalizar compra
        </Button>
      </div>
    </div>
  );
}
