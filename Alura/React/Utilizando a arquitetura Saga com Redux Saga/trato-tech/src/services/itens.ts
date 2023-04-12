import instance from 'common/config/api';
import ObjetoItem from 'types/ObjetoItem';

const itensServices = {
  buscar: async (nomeCategoria?: string) => {
    let url = '/itens';
    if (nomeCategoria) url = `/itens?categoria=${nomeCategoria}`;
    const resposta = await instance.get<ObjetoItem[]>(url);
    return resposta.data;
  },
};

export default itensServices;
