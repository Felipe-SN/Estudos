import { createSlice } from '@reduxjs/toolkit';

const buscaSlice = createSlice({
  name: 'busca',
  initialState: '',
  reducers: {
    mudarBusca: (state, { payload }) => payload,
    resetBusca: () => '',
  },
});

export const { mudarBusca, resetBusca } = buscaSlice.actions;

export default buscaSlice.reducer;
