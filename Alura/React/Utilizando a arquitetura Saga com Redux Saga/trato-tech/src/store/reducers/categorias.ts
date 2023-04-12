import { createAction, createSlice } from '@reduxjs/toolkit';
import Categoria from 'types/Categorias';

export const carregarCategorias = createAction('categorias/carregar');
export const carregarUmaCategoria = createAction<string | undefined>(
  'categorias/carregar/umaCategoria'
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: [] as Categoria[],
  reducers: {
    adicionarTodasAsCategorias: (state, { payload }) => {
      return payload;
    },
    adicionarUmaCategoria: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const { adicionarTodasAsCategorias, adicionarUmaCategoria } =
  categoriasSlice.actions;

export default categoriasSlice.reducer;
