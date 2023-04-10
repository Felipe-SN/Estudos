import { createStandaloneToast } from '@chakra-ui/toast';
import {
  ActionCreatorWithPayload,
  AnyAction,
  ForkedTask,
  ForkedTaskExecutor,
  ThunkDispatch,
} from '@reduxjs/toolkit';

type ObjetoTarefa = {
  action: ActionCreatorWithPayload<
    boolean | number | string | Array<unknown> | object,
    string
  >;
  buscar: () => Promise<boolean | number | string | Array<unknown> | object>;
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>;
  fork: <T>(executor: ForkedTaskExecutor<T>) => ForkedTask<T>;
  textoCarregando: string;
  textoErro: string;
  textoSucesso: string;
};

const { toast } = createStandaloneToast();

export default async function criarTarefa({
  action,
  buscar,
  dispatch,
  fork,
  textoCarregando,
  textoErro,
  textoSucesso,
}: ObjetoTarefa) {
  toast({
    description: textoCarregando,
    duration: 2000,
    isClosable: true,
    status: 'loading',
    title: 'Carregando',
  });

  const tarefa = fork(async api => {
    await api.delay(2000);
    return await buscar();
  });

  const resposta = await tarefa.result;

  if (resposta.status === 'ok') {
    toast({
      description: textoSucesso,
      duration: 2000,
      isClosable: true,
      status: 'success',
      title: 'Sucesso!',
    });
    dispatch(action(resposta.value));
    return resposta.status;
  }

  toast({
    description: textoErro,
    duration: null,
    isClosable: true,
    status: 'error',
    title: 'Erro ⚠️',
  });

  return resposta.status;
}
