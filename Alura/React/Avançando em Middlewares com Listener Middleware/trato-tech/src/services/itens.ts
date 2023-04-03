import instance from 'common/config/api';

const itensServices = {
  buscar: async () => {
    const resposta = await instance.get('/itens');
    return resposta.data;
  },
};

export default itensServices;
