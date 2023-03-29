import instance from 'common/config/api';

const categoriasServices = {
  buscar: async () => {
    const resposta = await instance.get('/categorias');
    return resposta.data;
  },
};

export default categoriasServices;
