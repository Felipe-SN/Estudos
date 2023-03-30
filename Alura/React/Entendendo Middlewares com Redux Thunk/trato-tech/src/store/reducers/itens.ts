import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import IObjetoItem from 'interfaces/IObjetoItem';
import itensServices from 'services/itens';

export const buscarItens = createAsyncThunk(
  'itens/buscar',
  itensServices.buscar
);

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
        return payload;
      })
      .addCase(buscarItens.pending, (state, { payload }) => {
        console.log('Busca de itens pendente!', !payload && '↻');
      })
      .addCase(buscarItens.rejected, (state, { payload }) => {
        console.log('Busca de itens rejeitada!', !payload && '⚠️');
      });
  },
});

export const { cadastrarItem, deletarItem, editarItem, mudarFavorito } =
  itensSlice.actions;

export default itensSlice.reducer;
