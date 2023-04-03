import { createSlice } from '@reduxjs/toolkit';
import { createStandaloneToast } from '@chakra-ui/toast';

type ItensCarrinho = {
  id: string;
  quantidade: number;
}[];

const { toast } = createStandaloneToast();

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: [] as ItensCarrinho,
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
    resetCarrinho: state => {
      if (state.length > 0)
        toast({
          description: 'Compra efetuada, obrigado!',
          duration: 2000,
          isClosable: true,
          status: 'success',
          title: 'Sucesso!',
        });

      return [] as ItensCarrinho;
    },
  },
});

export const { mudarCarrinho, mudarQuantidade, resetCarrinho } =
  carrinhoSlice.actions;

export default carrinhoSlice.reducer;
