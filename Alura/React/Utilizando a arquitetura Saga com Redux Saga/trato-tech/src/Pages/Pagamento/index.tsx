import Header from 'components/Header';
import styles from './Pagamento.module.scss';
import Select from 'components/Select';
import Button from 'components/Button';
import { useEffect } from 'react';
import { useAppDispatch } from 'store/hooks';
import { carregarPagamento } from 'store/reducers/carrinho';

export default function Pagamento() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(carregarPagamento());
  }, []);

  return (
    <div className={styles.container}>
      <Header titulo="Pagamento" />
      <div className={styles.dados}>
        <p className={styles.forma}>
          Olá usuário! Escolha a forma de pagamento:
        </p>
        <Select
          placeholder="Forma de pagamento"
          aria-label="Forma de pagamento"
        >
          <option value="-">Forma de pagamento</option>
        </Select>
        <div className={styles.content}>
          <p>Total com taxas: R$ 0.00</p>
        </div>
        <div className={styles.finalizar}>
          <Button>Finalizar Compra</Button>
        </div>
      </div>
    </div>
  );
}