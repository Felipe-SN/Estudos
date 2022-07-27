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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Voltar,
  TotalContainer,
  PagamentoContainer,
} from './styles';

const Carrinho = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { saldo } = useUserContext();
  const { checkout, checkoutTotal } = useCheckoutContext();
  const { paymentTypes, paymentMethod, changePaymentMethod } =
    usePaymentContext();

  const navigate = useNavigate();
  const total = saldo - checkoutTotal;

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
          value={paymentMethod.id}
          onChange={event => changePaymentMethod(event.target.value)}
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
          <span>R$ {checkoutTotal.toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ {parseFloat(saldo)}</span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ {total.toFixed(2)}</span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert onClose={() => setOpenSnackbar(false)} severity="success">
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default Carrinho;
