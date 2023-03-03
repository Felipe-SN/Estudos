import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';

export const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
  },
});

export default function ProviderRedux({ children }: ProviderReduxProps) {
  return <Provider store={store}>{children}</Provider>;
}

type ProviderReduxProps = { children: React.ReactNode };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
