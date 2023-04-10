import { adicionarItens } from 'store/reducers/itens';
import { carregarUmaCategoria } from 'store/reducers/categorias';
import {
  createListenerMiddleware,
  TypedStartListening,
} from '@reduxjs/toolkit';
import { RootState } from 'store/hooks';
import criarTarefa from './utils/criarTarefa';
import itensServices from 'services/itens';

export const itensListener = createListenerMiddleware();
const startAppListening =
  itensListener.startListening as TypedStartListening<RootState>;

startAppListening({
  actionCreator: carregarUmaCategoria,
  effect: async (action, { dispatch, fork, getState, unsubscribe }) => {
    const { itens } = getState();
    const nomeCategoria = action.payload;
    const itensCarregados = itens.some(
      item => item.categoria === nomeCategoria
    );

    if (itens.length === 25) return unsubscribe();
    if (itensCarregados) return;

    await criarTarefa({
      action: adicionarItens,
      buscar: () => itensServices.buscar(nomeCategoria),
      dispatch,
      fork,
      textoCarregando: `Solicitando itens da categoria ${nomeCategoria}`,
      textoErro: `Falha ao coletar itens da categoria ${nomeCategoria}`,
      textoSucesso: `Itens da categoria ${nomeCategoria} carregados`,
    });
  },
});
