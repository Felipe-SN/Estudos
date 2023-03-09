import { createSlice } from '@reduxjs/toolkit';
import itens from 'data/itens.json';

const initialState = itens;

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state.map(item => {
        if (item.id === payload) item.favorito = !item.favorito;
        return item;
      });
    },
  },
});

export const { mudarFavorito } = itensSlice.actions;

export default itensSlice.reducer;
