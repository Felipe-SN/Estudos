import { useAppSelector } from 'store/hooks';
import { valorMoeda } from 'helpers/formatadores';
import Header from 'components/Header';
import Item from 'components/Item';
import styles from './Carrinho.module.scss';

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
  const carrinho = useAppSelector(state => {
    const carrinhoReduce = state.carrinho.reduce(
      (itens: CheckoutList, itemNoCarrinho) => {
        const item = state.itens.find(item => item.id === itemNoCarrinho.id);
        item && itens.push({ ...item, quantidade: itemNoCarrinho.quantidade });
        return itens;
      },
      []
    );
    return carrinhoReduce;
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
            Subtotal: <strong>{valorMoeda(0.0)}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
