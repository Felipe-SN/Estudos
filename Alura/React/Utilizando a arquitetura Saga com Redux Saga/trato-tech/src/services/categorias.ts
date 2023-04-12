import instance from 'common/config/api';
import Categoria from 'types/Categorias';

const categoriasServices = {
  buscar: async (nomeCategoria = '') => {
    const resposta = await instance.get<Categoria | Categoria[]>(
      `/categorias/${nomeCategoria}`
    );
    return resposta.data;
  },
};

export default categoriasServices;
