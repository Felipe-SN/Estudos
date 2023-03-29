import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasServices from 'services/categorias';

type Categorias = {
  nome: string;
  thumbnail: string;
  header: string;
  id: string;
  descricao: string;
}[];

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasServices.buscar
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: [] as Categorias,
  reducers: {
    adicionarCategorias: (state, { payload }) => {
      if (state.length > 0) return;
      state.push(...payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(buscarCategorias.fulfilled, (state, { payload }) => {
      if (state.length > 0) return;
      state.push(...payload);
    });
  },
});

export const { adicionarCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;
