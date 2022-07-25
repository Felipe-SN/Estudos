import { createContext, useContext, useState } from 'react';

export const CheckoutContext = createContext({});
CheckoutContext.displayName = 'Carrinho';

export const CheckoutProvider = ({ children }) => {
  const [checkout, setCheckout] = useState([]);

  return (
    <CheckoutContext.Provider value={{ checkout, setCheckout }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckoutContext = () => {
  const { checkout, setCheckout } = useContext(CheckoutContext);

  const alterarQuantidade = (id, quantidade) => {
    checkout.map(item => {
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

  return { checkout, setCheckout, adicionarProduto, removerProduto };
};
