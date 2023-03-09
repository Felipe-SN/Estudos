import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const buscaSlice = createSlice({
  name: 'busca',
  initialState,
  reducers: {
    mudarBusca: (state, { payload }) => payload,
    resetBusca: () => initialState,
  },
});

export const { mudarBusca, resetBusca } = buscaSlice.actions;

export default buscaSlice.reducer;
