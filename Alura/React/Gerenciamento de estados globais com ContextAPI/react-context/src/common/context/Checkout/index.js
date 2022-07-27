import { createContext, useContext, useEffect, useState } from 'react';

export const CheckoutContext = createContext({});
CheckoutContext.displayName = 'Carrinho';

export const CheckoutProvider = ({ children }) => {
  const [checkout, setCheckout] = useState([]);
  const [productCounter, setProductCounter] = useState(0);
  const [checkoutTotal, setCheckoutTotal] = useState(0);

  return (
    <CheckoutContext.Provider
      value={{
        checkout,
        setCheckout,
        productCounter,
        setProductCounter,
        checkoutTotal,
        setCheckoutTotal,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckoutContext = () => {
  const {
    checkout,
    setCheckout,
    productCounter,
    setProductCounter,
    checkoutTotal,
    setCheckoutTotal,
  } = useContext(CheckoutContext);

  const alterarQuantidade = (id, quantidade) => {
    return checkout.map(item => {
      if (item.id === id) item.unidade += quantidade;
      return item;
    });
  };

  const adicionarProduto = novoProduto => {
    const temProduto = checkout.some(item => item.id === novoProduto.id);
    if (!temProduto) {
      novoProduto.unidade = 1;
      return setCheckout(lastCheckout => [...lastCheckout, novoProduto]);
    }
    setCheckout(alterarQuantidade(novoProduto.id, 1));
  };

  const removerProduto = id => {
    const produto = checkout.find(item => item.id === id);
    if (produto.unidade === 1) {
      return setCheckout(lastCheckout =>
        lastCheckout.filter(item => item.id !== id)
      );
    }
    setCheckout(alterarQuantidade(id, -1));
  };

  useEffect(() => {
    const { newTotal, newCounter } = checkout.reduce(
      (counter, product) => ({
        newCounter: counter.newCounter + product.unidade,
        newTotal: counter.newTotal + product.valor * product.unidade,
      }),
      { newCounter: 0, newTotal: 0 }
    );
    setProductCounter(newCounter);
    setCheckoutTotal(newTotal);
  }, [checkout, setProductCounter, setCheckoutTotal]);

  return {
    adicionarProduto,
    checkout,
    checkoutTotal,
    productCounter,
    removerProduto,
  };
};
