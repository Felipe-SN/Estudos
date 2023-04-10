import { createAction, createSlice } from '@reduxjs/toolkit';

type Categoria = {
  nome: string;
  thumbnail: string;
  header: string;
  id: string;
  descricao: string;
};

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
