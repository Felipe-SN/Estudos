import { categoriasListener } from './middlewares/categorias';
import { configureStore } from '@reduxjs/toolkit';
import { itensListener } from './middlewares/itens';
import { Provider } from 'react-redux';
import buscaSlice from './reducers/busca';
import carrinhoSlice from './reducers/carrinho';
import categoriasSlice from './reducers/categorias';
import createSagaMiddleware from 'redux-saga';
import itensSlice from './reducers/itens';
import rootSaga from './sagas';
import usuarioSlice from './reducers/usuario';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    categorias: categoriasSlice,
    itens: itensSlice,
    busca: buscaSlice,
    usuario: usuarioSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(
      categoriasListener.middleware,
      itensListener.middleware,
      sagaMiddleware
    ),
});

sagaMiddleware.run(rootSaga);

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
