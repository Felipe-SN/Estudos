import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createStandaloneToast } from '@chakra-ui/toast';
import categoriasServices from 'services/categorias';

type Categorias = {
  nome: string;
  thumbnail: string;
  header: string;
  id: string;
  descricao: string;
}[];

const { toast } = createStandaloneToast();

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasServices.buscar
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: [] as Categorias,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(buscarCategorias.fulfilled, (state, { payload }) => {
        toast({
          description: 'Categorias carregadas',
          duration: 2000,
          isClosable: true,
          status: 'success',
          title: 'Sucesso!',
        });
        return payload;
      })
      .addCase(buscarCategorias.pending, () => {
        toast({
          description: 'Solicitando categorias',
          duration: 2000,
          isClosable: true,
          status: 'loading',
          title: 'Carregando ↻',
        });
      })
      .addCase(buscarCategorias.rejected, () => {
        toast({
          description: 'Falha ao coletar categorias',
          duration: 2000,
          isClosable: true,
          status: 'error',
          title: 'Erro ⚠️',
        });
      });
  },
});

export default categoriasSlice.reducer;
