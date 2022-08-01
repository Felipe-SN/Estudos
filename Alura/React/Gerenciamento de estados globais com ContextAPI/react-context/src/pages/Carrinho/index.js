import {
  Button,
  Snackbar,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useCheckoutContext } from 'common/context/Checkout';
import { usePaymentContext } from 'common/context/Payment';
import { useUserContext } from 'common/context/User';
import Produto from 'components/Produto';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Voltar,
  TotalContainer,
  PagamentoContainer,
} from './styles';

const Carrinho = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { saldo = 0 } = useUserContext();
  const { checkout, checkoutTotalPrice, makePurchase } = useCheckoutContext();
  const { paymentTypes, paymentMethod, changePaymentMethod } =
    usePaymentContext();

  const navigate = useNavigate();
  const total = useMemo(
    () => saldo - checkoutTotalPrice,
    [saldo, checkoutTotalPrice]
  );

  return (
    <Container>
      <Voltar onClick={() => navigate(-1)} />
      <h2>Carrinho</h2>
      {checkout.map(produto => (
        <Produto {...produto} key={produto.id} />
      ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          onChange={event => changePaymentMethod(event.target.value)}
          value={paymentMethod.id}
        >
          {paymentTypes.map(payment => (
            <MenuItem key={payment.id} value={payment.id}>
              {payment.nome}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ {checkoutTotalPrice.toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ {saldo.toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ {total.toFixed(2)}</span>
        </div>
      </TotalContainer>
      <Button
        color="primary"
        disabled={total < 0 || checkout.length === 0}
        onClick={() => {
          makePurchase();
          setOpenSnackbar(true);
        }}
        variant="contained"
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() => setOpenSnackbar(false)}
        open={openSnackbar}
      >
        <MuiAlert onClose={() => setOpenSnackbar(false)} severity="success">
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default Carrinho;
