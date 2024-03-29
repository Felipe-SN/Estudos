import {
  adicionarTodasAsCategorias,
  adicionarUmaCategoria,
  carregarCategorias,
  carregarUmaCategoria,
} from 'store/reducers/categorias';
import {
  createListenerMiddleware,
  TypedStartListening,
} from '@reduxjs/toolkit';
import { RootState } from 'store/hooks';
import categoriasServices from 'services/categorias';
import criarTarefa from './utils/criarTarefa';

export const categoriasListener = createListenerMiddleware();
const startAppListening =
  categoriasListener.startListening as TypedStartListening<RootState>;

startAppListening({
  actionCreator: carregarCategorias,
  effect: async (action, { dispatch, fork, unsubscribe }) => {
    const resposta = await criarTarefa({
      action: adicionarTodasAsCategorias,
      buscar: categoriasServices.buscar,
      dispatch,
      fork,
      textoCarregando: 'Solicitando categorias',
      textoErro: 'Falha ao coletar categorias',
      textoSucesso: 'Categorias carregadas',
    });
    if (resposta === 'ok') unsubscribe();
  },
});

startAppListening({
  actionCreator: carregarUmaCategoria,
  effect: async (action, { dispatch, fork, getState, unsubscribe }) => {
    const { categorias } = getState();
    const nomeCategoria = action.payload;
    const categoriaCarregada = categorias.some(cat => cat.id === nomeCategoria);

    if (categorias.length === 5) return unsubscribe();
    if (categoriaCarregada) return;

    await criarTarefa({
      action: adicionarUmaCategoria,
      buscar: () => categoriasServices.buscar(nomeCategoria),
      dispatch,
      fork,
      textoCarregando: `Carregando ${nomeCategoria}`,
      textoErro: `Falha ao carregar categoria ${nomeCategoria}`,
      textoSucesso: `Categoria ${nomeCategoria} carregada`,
    });
  },
});
