import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import itens from 'data/itens.json';

const initialState = itens;

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload);
      state[index].favorito = !state[index].favorito;
    },
    cadastrarItem: (state, { payload }) => {
      state.push({ ...payload, favorito: false, id: uuid() });
    },
    editarItem: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload.id);
      Object.assign(state[index], payload.item);
    },
  },
});

export const { mudarFavorito, cadastrarItem, editarItem } = itensSlice.actions;

export default itensSlice.reducer;
