import { createContext, useContext, useState } from 'react';

const PaymentContext = createContext({});
PaymentContext.displayName = 'Pagamento';

export const PaymentProvider = ({ children }) => {
  const paymentTypes = [
    { nome: 'Boleto', juros: 1, id: 1 },
    { nome: 'Cartão de Credito', juros: 1.3, id: 2 },
    { nome: 'PIX', juros: 1, id: 3 },
    { nome: 'Crediário', juros: 1.5, id: 4 },
  ];
  const [paymentMethod, setPaymentMethod] = useState(paymentTypes[0]);

  return (
    <PaymentContext.Provider
      value={{ paymentTypes, paymentMethod, setPaymentMethod }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentContext = () => {
  const { paymentMethod, setPaymentMethod, paymentTypes } =
    useContext(PaymentContext);

  const changePaymentMethod = id => {
    const actualPayment = paymentTypes.find(payment => payment.id === id);

    setPaymentMethod(actualPayment);
  };

  return { paymentMethod, paymentTypes, changePaymentMethod };
};
