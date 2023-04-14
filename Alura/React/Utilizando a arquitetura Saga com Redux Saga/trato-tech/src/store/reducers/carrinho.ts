import { createAction, createSlice } from '@reduxjs/toolkit';
import { createStandaloneToast } from '@chakra-ui/toast';

type ItemCarrinho = {
  id: string;
  quantidade: number;
};

const { toast } = createStandaloneToast();

export const carregarPagamento = createAction('carrinho/carregar/pagamento');

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: { data: [] as ItemCarrinho[], total: 0 },
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const index = state.data.findIndex(item => item.id === payload);
      index >= 0
        ? state.data.splice(index, 1)
        : state.data.push({ id: payload, quantidade: 1 });
    },
    mudarQuantidade: (state, { payload }) => {
      const index = state.data.findIndex(item => item.id === payload.id);
      state.data[index].quantidade += payload.quantidade;
      if (state.data[index].quantidade === 0) state.data.splice(index, 1);
    },
    resetCarrinho: state => {
      if (state.data.length > 0)
        toast({
          description: 'Compra efetuada, obrigado!',
          duration: 2000,
          isClosable: true,
          status: 'success',
          title: 'Sucesso!',
        });

      return { data: [] as ItemCarrinho[], total: 0 };
    },
    mudarTotal: (state, { payload }) => {
      state.total = payload;
    },
  },
});

export const { mudarCarrinho, mudarQuantidade, resetCarrinho, mudarTotal } =
  carrinhoSlice.actions;

export default carrinhoSlice.reducer;
