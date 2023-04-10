import { createSlice } from '@reduxjs/toolkit';
import { v4 as genId } from 'uuid';
import ObjetoItem from 'types/ObjetoItem';

const itensSlice = createSlice({
  name: 'itens',
  initialState: [] as ObjetoItem[],
  reducers: {
    adicionarItens: (state, { payload }) => {
      state.push(...payload);
    },
    cadastrarItem: (state, { payload }) => {
      state.push({ ...payload, favorito: false, id: genId() });
    },
    deletarItem: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload);
      state.splice(index, 1);
    },
    editarItem: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload.id);
      Object.assign(state[index], payload.item);
    },
    mudarFavorito: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload);
      state[index].favorito = !state[index].favorito;
    },
  },
});

export const {
  adicionarItens,
  cadastrarItem,
  deletarItem,
  editarItem,
  mudarFavorito,
} = itensSlice.actions;

export default itensSlice.reducer;
