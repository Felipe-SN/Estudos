import http from 'http/instance';
import sessionTokenHelper from 'helpers/sessionTokenHelper';
import IRequest from 'interfaces/IRequest';

type NewUserProps = {
  email: string;
  senha: string;
  nome: string;
  endereco: string;
  complemento: string;
  cep: string;
};

type UserProps = {
  email: string;
  senha: string;
};

const { token } = sessionTokenHelper();

const serviceApiCommunication = () => {
  const requestsCalls = {
    get: async () => {
      const response = await http.get<IRequest[]>('pedidos');
      return response.data;
    },

    delete: async (id: number) => {
      http.delete(`pedidos/${id}`);
    },
  };
  const userCalls = {
    register: async (user: NewUserProps, auxFunction: () => void) => {
      await http.post('public/registrar', user);
      alert('Usuário cadastrado com sucesso!');
      auxFunction();
    },

    login: async (user: UserProps, auxFunction: () => void) => {
      const response = await http.post('public/login', user);
      token.set(response.data.access_token);
      auxFunction();
    },
  };

  return { userCalls, requestsCalls };
};

export default serviceApiCommunication;
