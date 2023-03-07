import { useAppSelector, useAppDispatch } from 'store/hooks';
import { valorMoeda } from 'helpers/formatadores';
import Header from 'components/Header';
import Item from 'components/Item';
import styles from './Carrinho.module.scss';
import { resetCarrinho } from 'store/reducers/carrinho';

type CheckoutList = {
  categoria: string;
  descricao: string;
  favorito: boolean;
  foto: string;
  id: string;
  preco: number;
  titulo: string;
  quantidade: number;
}[];

export default function Carrinho() {
  const dispatch = useAppDispatch();
  const { carrinho, total } = useAppSelector(state => {
    let total = 0;
    const carrinhoReduce = state.carrinho.reduce(
      (itens: CheckoutList, itemNoCarrinho) => {
        const item = state.itens.find(item => item.id === itemNoCarrinho.id);
        if (item) {
          total += item.preco * itemNoCarrinho.quantidade;
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
            Subtotal: <strong>{valorMoeda(total)}</strong>
          </span>
        </div>
        <button
          className={styles.finalizar}
          onClick={() => dispatch(resetCarrinho())}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
