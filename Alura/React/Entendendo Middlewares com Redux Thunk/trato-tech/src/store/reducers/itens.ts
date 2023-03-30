import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createStandaloneToast } from '@chakra-ui/toast';
import { v4 as uuid } from 'uuid';
import IObjetoItem from 'interfaces/IObjetoItem';
import itensServices from 'services/itens';

export const buscarItens = createAsyncThunk(
  'itens/buscar',
  itensServices.buscar
);

const { toast } = createStandaloneToast();

const itensSlice = createSlice({
  name: 'itens',
  initialState: [] as IObjetoItem[],
  reducers: {
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
  extraReducers: builder => {
    builder
      .addCase(buscarItens.fulfilled, (state, { payload }) => {
        toast({
          description: 'Itens carregados',
          duration: 2000,
          isClosable: true,
          status: 'success',
          title: 'Sucesso!',
        });
        return payload;
      })
      .addCase(buscarItens.pending, () => {
        toast({
          description: 'Solicitando itens',
          duration: 2000,
          isClosable: true,
          status: 'loading',
          title: 'Carregando ↻',
        });
      })
      .addCase(buscarItens.rejected, () => {
        toast({
          description: 'Falha ao coletar itens',
          duration: 2000,
          isClosable: true,
          status: 'error',
          title: 'Erro ⚠️',
        });
      });
  },
});

export const { cadastrarItem, deletarItem, editarItem, mudarFavorito } =
  itensSlice.actions;

export default itensSlice.reducer;
