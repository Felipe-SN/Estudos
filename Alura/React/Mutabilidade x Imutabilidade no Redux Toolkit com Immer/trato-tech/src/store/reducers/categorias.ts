import { createSlice } from '@reduxjs/toolkit';
import categorias from 'data/categorias.json';

const initialState = categorias;

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {},
});

export default categoriasSlice.reducer;
