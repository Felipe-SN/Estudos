import { createStandaloneToast } from '@chakra-ui/toast';

const { toast } = createStandaloneToast();

toast({
  description: 'Itens carregados',
  duration: 2000,
  isClosable: true,
  status: 'success',
  title: 'Sucesso!',
});

toast({
  description: 'Solicitando itens',
  duration: 2000,
  isClosable: true,
  status: 'loading',
  title: 'Carregando',
});

toast({
  description: 'Falha ao coletar itens',
  duration: 2000,
  isClosable: true,
  status: 'error',
  title: 'Erro ⚠️',
});
