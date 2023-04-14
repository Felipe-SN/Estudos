import instance from 'common/config/api';
import Bandeira from 'types/Bandeiras';

const bandeirasService = {
  buscarPorId: async (bandeiraIds: number[]) => {
    const query = new URLSearchParams();
    bandeiraIds.forEach(id => query.append('id', id.toString()));
    const resposta = await instance.get<Bandeira | Bandeira[]>(
      `/bandeiras?${query.toString()}`
    );

    return resposta.data;
  },
};

export default bandeirasService;
