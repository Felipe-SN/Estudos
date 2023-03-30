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
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(buscarCategorias.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(buscarCategorias.pending, (state, { payload }) => {
        console.log('Busca de categorias pendente!', !payload && '↻');
      })
      .addCase(buscarCategorias.rejected, (state, { payload }) => {
        console.log('Busca de categorias rejeitada!', !payload && '⚠️');
      });
  },
});

export default categoriasSlice.reducer;
