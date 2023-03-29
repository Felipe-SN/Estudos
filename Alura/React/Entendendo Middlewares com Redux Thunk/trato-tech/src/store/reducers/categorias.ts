import { createSlice } from '@reduxjs/toolkit';

type Categorias = {
  nome: string;
  thumbnail: string;
  header: string;
  id: string;
  descricao: string;
}[];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: [] as Categorias,
  reducers: {
    adicionarCategorias: (state, { payload }) => {
      if (state.length > 0) return;
      state.push(...payload);
    },
  },
});

export const { adicionarCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;
