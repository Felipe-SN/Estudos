import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import carrinhoSlice from './reducers/carrinho';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';

type ProviderReduxProps = { children: React.ReactNode };

export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    categorias: categoriasSlice,
    itens: itensSlice,
  },
});

export default function StoreProvider({ children }: ProviderReduxProps) {
  return <Provider store={store}>{children}</Provider>;
}
