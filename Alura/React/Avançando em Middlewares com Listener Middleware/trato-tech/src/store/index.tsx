import { configureStore } from '@reduxjs/toolkit';
import { listener } from './middlewares/categorias';
import { Provider } from 'react-redux';
import buscaSlice from './reducers/busca';
import carrinhoSlice from './reducers/carrinho';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';

export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    categorias: categoriasSlice,
    itens: itensSlice,
    busca: buscaSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(listener.middleware),
});

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
