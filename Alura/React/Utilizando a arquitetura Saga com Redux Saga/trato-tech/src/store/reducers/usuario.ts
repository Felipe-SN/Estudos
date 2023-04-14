import { createSlice } from '@reduxjs/toolkit';
import Usuario from 'types/Usuario';

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState: {} as Usuario,
  reducers: {
    adicionarUsuario: (state, { payload }) => {
      return payload;
    },
  },
});

export const { adicionarUsuario } = usuarioSlice.actions;

export default usuarioSlice.reducer;
