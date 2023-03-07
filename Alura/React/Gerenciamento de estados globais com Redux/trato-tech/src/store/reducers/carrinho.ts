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
      const temItem = state.some(item => item.id === payload);
      if (temItem) return state.filter(item => item.id !== payload);
      return [...state, { id: payload, quantidade: 1 }];
    },
    mudarQuantidade: (state, { payload }) => {
      state = state.map(item => {
        if (item.id === payload.id) item.quantidade += payload.quantidade;
        return item;
      });
    },
    resetCarrinho: () => initialState,
  },
});

export const { mudarCarrinho, mudarQuantidade, resetCarrinho } =
  carrinhoSlice.actions;

export default carrinhoSlice.reducer;
