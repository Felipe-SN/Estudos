import { adicionarUsuario } from 'store/reducers/usuario';
import {
  all,
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  carregarPagamento,
  mudarCarrinho,
  mudarQuantidade,
  mudarTotal,
} from 'store/reducers/carrinho';
import { RootState } from 'store/hooks';
import { SagaIterator } from 'redux-saga';
import Bandeira from 'types/Bandeiras';
import bandeirasService from 'services/bandeiras';
import Cartao from 'types/Cartao';
import cartoesService from 'services/cartoes';
import Usuario from 'types/Usuario';
import usuarioService from 'services/usuarios';

const usuarioLogado = 1;

function* carregarPagamentoSaga() {
  try {
    const [usuario, cartoes]: [Usuario, Cartao[]] = yield all([
      call(usuarioService.buscarPorId, usuarioLogado),
      call(cartoesService.buscarPorIdUsuario, usuarioLogado),
    ]);

    const bandeiraIds = cartoes.map(cartao => cartao.bandeiraId);
    const bandeiras: Bandeira[] = yield call(
      bandeirasService.buscarPorId,
      bandeiraIds
    );

    const cartoesComBandeiras = cartoes.map(cartao => {
      const bandeiraDoCartao = bandeiras.find(
        bandeira => bandeira.id === cartao.bandeiraId
      );
      if (bandeiraDoCartao)
        return {
          ...cartao,
          taxa: bandeiraDoCartao.taxa,
          bandeira: bandeiraDoCartao.nome,
        };
    });

    yield put(
      adicionarUsuario({
        ...usuario,
        cartoes: cartoesComBandeiras,
      })
    );
  } catch (error) {
    yield;
  }
}

function* calcularTotal() {
  yield delay(500);
  const state = (yield select()) as RootState;
  const total = state.carrinho.data.reduce((total, itemNoCarrinho) => {
    const item = state.itens.find(item => item.id === itemNoCarrinho.id);
    if (item) return total + item.preco * itemNoCarrinho.quantidade;
    return total;
  }, 0);

  yield put(mudarTotal(total));
}

export function* carrinhoSaga(): SagaIterator {
  yield takeLatest(carregarPagamento, carregarPagamentoSaga);
  yield takeEvery([mudarQuantidade, mudarCarrinho], calcularTotal);
}
