import instance from 'common/config/api';
import Usuario from 'types/Usuario';

const usuarioService = {
  buscarPorId: async (id: number) => {
    const resposta = await instance.get<Usuario>(`/usuarios/${id}`);
    return resposta.data;
  },
};

export default usuarioService;
