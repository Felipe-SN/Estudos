import instance from 'common/config/api';

const itensServices = {
  buscar: async (nomeCategoria?: string) => {
    let url = '/itens';
    if (nomeCategoria) url = `/itens?categoria=${nomeCategoria}`;
    const resposta = await instance.get(url);
    return resposta.data;
  },
};

export default itensServices;
