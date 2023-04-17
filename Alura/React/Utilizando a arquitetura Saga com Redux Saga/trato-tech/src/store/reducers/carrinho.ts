import { createAction, createSlice } from '@reduxjs/toolkit';

type ItemCarrinho = {
  id: string;
  quantidade: number;
};

type InfoPagamento = {
  valorTotal: number;
  formaDePagamento: {
    nome: string;
    bandeiraId: number;
    saldo: number;
    usuarioId: number;
    id: string;
    taxa: number;
    bandeira: string;
  };
};

export const carregarPagamento = createAction('carrinho/carregar/pagamento');
export const finalizarPagamento = createAction<InfoPagamento>('carrinho/finalizar/pagamento');

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: { data: [] as ItemCarrinho[], total: 0 },
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const index = state.data.findIndex(item => item.id === payload);
      index >= 0 ? state.data.splice(index, 1) : state.data.push({ id: payload, quantidade: 1 });
    },
    mudarQuantidade: (state, { payload }) => {
      const index = state.data.findIndex(item => item.id === payload.id);
      state.data[index].quantidade += payload.quantidade;
      if (state.data[index].quantidade === 0) state.data.splice(index, 1);
    },
    resetCarrinho: () => {
      return { data: [] as ItemCarrinho[], total: 0 };
    },
    mudarTotal: (state, { payload }) => {
      state.total = payload;
    },
  },
});

export const { mudarCarrinho, mudarQuantidade, resetCarrinho, mudarTotal } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
