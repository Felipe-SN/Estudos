import { carregarPagamento, finalizarPagamento } from 'store/reducers/carrinho';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useEffect, useState } from 'react';
import Button from 'components/Button';
import formatadores from 'helpers/formatadores';
import Header from 'components/Header';
import Select from 'components/Select';
import styles from './Pagamento.module.scss';

const formaPagamentoInicial = {
  nome: '',
  bandeiraId: -1,
  saldo: -1,
  usuarioId: -1,
  id: '-',
  taxa: 1,
  bandeira: '',
};
const { valorMoeda } = formatadores;

export default function Pagamento() {
  const dispatch = useAppDispatch();
  const { total, usuario } = useAppSelector(state => ({
    usuario: state.usuario,
    total: state.carrinho.total,
  }));
  const [formaDePagamento, setFormaDePagamento] = useState(formaPagamentoInicial);
  const valorTotal = total * formaDePagamento.taxa;

  const finalizar = () => {
    dispatch(finalizarPagamento({ valorTotal, formaDePagamento }));
  };

  const mudarFormaDePagamento = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '-') return setFormaDePagamento(formaPagamentoInicial);
    const cartaoSelecionado = usuario.cartoes?.find(cartao => cartao.id === e.target.value);
    if (cartaoSelecionado) setFormaDePagamento(cartaoSelecionado);
  };

  useEffect(() => {
    dispatch(carregarPagamento());
  }, []);

  return (
    <div className={styles.container}>
      <Header titulo="Pagamento" />
      <div className={styles.dados}>
        <p className={styles.forma}>Olá {usuario.nome}! Escolha a forma de pagamento:</p>
        <Select
          placeholder="Forma de pagamento"
          aria-label="Forma de pagamento"
          value={formaDePagamento.id}
          onChange={e => mudarFormaDePagamento(e)}
        >
          <option value="-" disabled>
            Forma de pagamento
          </option>
          {usuario.cartoes?.map(cartao => (
            <option key={cartao.id} value={cartao.id}>
              {cartao.nome}
            </option>
          ))}
        </Select>
        <div className={styles.content}>
          {formaDePagamento.id !== '-' && (
            <>
              <p>
                A forma de pagamento {formaDePagamento.nome} tem taxa de {formaDePagamento.taxa}x
              </p>
              <p>O saldo deste cartão é de {valorMoeda(formaDePagamento.saldo)}</p>
            </>
          )}
          <p>Total com taxas: {valorMoeda(valorTotal)}</p>
        </div>
        <div className={styles.finalizar}>
          <Button disabled={valorTotal === 0 || formaDePagamento.id === '-'} onClick={finalizar}>
            Finalizar Compra
          </Button>
        </div>
      </div>
    </div>
  );
}
