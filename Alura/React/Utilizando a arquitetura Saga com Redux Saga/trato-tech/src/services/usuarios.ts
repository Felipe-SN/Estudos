import instance from 'common/config/api';

const usuarioService = {
  buscarPorId: async (id: number) => {
    const resposta = await instance.get(`/usuarios/${id}`);
    return resposta.data;
  },
};

export default usuarioService;
