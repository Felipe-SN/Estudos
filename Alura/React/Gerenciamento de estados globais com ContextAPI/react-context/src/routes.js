import { CheckoutProvider } from 'common/context/Checkout';
import { PaymentProvider } from 'common/context/Payment';
import { UserProvider } from 'common/context/User';
import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <CheckoutProvider>
          <PaymentProvider>
            <Routes>
              <Route exact path="/">
                <Route index element={<Login />} />
                <Route path="feira" element={<Feira />} />
                <Route path="carrinho" element={<Carrinho />} />
              </Route>
            </Routes>
          </PaymentProvider>
        </CheckoutProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default Router;
