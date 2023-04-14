import instance from 'common/config/api';
import Cartao from 'types/Cartao';

const cartoesService = {
  buscarPorIdUsuario: async (usuarioId: number) => {
    const resposta = await instance.get<Cartao | Cartao[]>(
      `/cartoes?usuarioId=${usuarioId}`
    );
    return resposta.data;
  },
};

export default cartoesService;
