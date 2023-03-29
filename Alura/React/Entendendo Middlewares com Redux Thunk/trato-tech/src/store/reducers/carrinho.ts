import { createSlice } from '@reduxjs/toolkit';

type ItensCarrinho = {
  id: string;
  quantidade: number;
}[];

const initialState = [] as ItensCarrinho;

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload);
      index >= 0
        ? state.splice(index, 1)
        : state.push({ id: payload, quantidade: 1 });
    },
    mudarQuantidade: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload.id);
      state[index].quantidade += payload.quantidade;
      if (state[index].quantidade === 0) state.splice(index, 1);
    },
    resetCarrinho: () => initialState,
  },
});

export const { mudarCarrinho, mudarQuantidade, resetCarrinho } =
  carrinhoSlice.actions;

export default carrinhoSlice.reducer;
