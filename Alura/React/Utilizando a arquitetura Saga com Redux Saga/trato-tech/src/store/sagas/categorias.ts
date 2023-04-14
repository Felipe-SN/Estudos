import {
  adicionarTodasAsCategorias,
  carregarCategorias,
} from 'store/reducers/categorias';
import { AxiosResponse } from 'axios';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { createStandaloneToast } from '@chakra-ui/toast';
import { SagaIterator } from 'redux-saga';
import { Task } from '@redux-saga/types';
import Categoria from 'types/Categorias';
import categoriasServices from 'services/categorias';

const { toast } = createStandaloneToast();

function* observarCategorias() {
  const toastCarregando = toast({
    description: 'Solicitando categorias',
    duration: null,
    isClosable: true,
    status: 'loading',
    title: 'Carregando',
  });

  try {
    yield delay(3000);
    const categorias: AxiosResponse<Categoria[]> = yield call(
      categoriasServices.buscar
    );
    toast({
      description: 'Categorias carregadas',
      duration: 5000,
      isClosable: true,
      status: 'success',
      title: 'Sucesso!',
    });
    toast.close(toastCarregando);
    yield put(adicionarTodasAsCategorias(categorias));
  } catch (error) {
    toast({
      description: `Falha ao coletar categorias`,
      duration: null,
      isClosable: true,
      status: 'error',
      title: 'Erro ⚠️',
    });
    toast.close(toastCarregando);
  }
}

export function* categoriasSaga(): SagaIterator {
  const tarefa: Task = yield takeLatest(carregarCategorias, observarCategorias);
  yield takeLatest(adicionarTodasAsCategorias, () => tarefa.cancel());
}
