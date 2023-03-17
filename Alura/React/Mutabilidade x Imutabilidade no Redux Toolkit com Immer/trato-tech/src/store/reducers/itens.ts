import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import itens from 'data/itens.json';

const initialState = itens;

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state.map(item => {
        if (item.id === payload) item.favorito = !item.favorito;
        return item;
      });
    },
    cadastrarItem: (state, { payload }) => {
      const novoItem = {
        titulo: payload.nome,
        descricao: payload.descricao,
        foto: payload.imagem,
        favorito: false,
        preco: payload.preco,
        id: uuid(),
        categoria: payload.categoria,
      };
      return [...state, novoItem];
    },
  },
});

export const { mudarFavorito, cadastrarItem } = itensSlice.actions;

export default itensSlice.reducer;
