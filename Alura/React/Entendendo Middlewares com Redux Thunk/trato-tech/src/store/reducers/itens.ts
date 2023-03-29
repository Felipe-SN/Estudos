import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import IObjetoItem from 'interfaces/IObjetoItem';

const itensSlice = createSlice({
  name: 'itens',
  initialState: [] as IObjetoItem[],
  reducers: {
    adicionarItens: (state, { payload }) => {
      payload.forEach((item: IObjetoItem) => {
        const index = state.findIndex(objeto => objeto.id === item.id);
        if (index < 0) state.push(item);
      });
    },
    cadastrarItem: (state, { payload }) => {
      state.push({ ...payload, favorito: false, id: uuid() });
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
