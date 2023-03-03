import { createSlice } from '@reduxjs/toolkit';
import itens from 'data/itens.json';
import { v4 as uuid } from 'uuid';

itens.forEach(item => (item.id = uuid()));

const initialState = itens;

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {},
});

export default itensSlice.reducer;
