import { router } from 'routes';
import { useAppSelector } from 'store/hooks';
import Button from 'components/Button';
import formatadores from 'helpers/formatadores';
import Header from 'components/Header';
import Item from 'components/Item';
import ObjetoItem from 'types/ObjetoItem';
import styles from './Carrinho.module.scss';
import { createStandaloneToast } from '@chakra-ui/toast';

const { toast } = createStandaloneToast();

export default function Carrinho() {
  const { carrinho, total } = useAppSelector(state => {
    let total = 0;
    const regExp = new RegExp(state.busca, 'i');
    const carrinhoReduce = state.carrinho.reduce(
      (itens: ObjetoItem[], itemNoCarrinho) => {
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

  const resolverFinalizarCompra = () => {
    if (carrinho.length > 0) return router.navigate('/pagamento');
    toast({
      description: 'Por favor adicione itens no carrinho para prosseguir',
      duration: 5000,
      title: 'Carrinho esta vazio!',
      status: 'warning',
    });
  };

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
        <Button onClick={resolverFinalizarCompra}>Finalizar compra</Button>
      </div>
    </div>
  );
}
