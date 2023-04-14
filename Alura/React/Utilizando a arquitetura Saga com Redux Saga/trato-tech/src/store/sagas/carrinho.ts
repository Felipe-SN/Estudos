import { SagaIterator } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import { carregarPagamento } from 'store/reducers/carrinho';

function* carregarPagamentoSaga() {
  yield console.log('Hi there!');
}

export default function* carrinhoSaga(): SagaIterator {
  yield takeLatest(carregarPagamento, carregarPagamentoSaga);
}
