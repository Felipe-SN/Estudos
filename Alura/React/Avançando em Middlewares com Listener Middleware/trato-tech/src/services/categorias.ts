import instance from 'common/config/api';

const categoriasServices = {
  buscar: async (nomeCategoria = '') => {
    const resposta = await instance.get(`/categorias/${nomeCategoria}`);
    return resposta.data;
  },
};

export default categoriasServices;
