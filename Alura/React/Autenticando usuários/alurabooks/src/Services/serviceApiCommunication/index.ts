import { http } from 'http/instance';
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
      try {
        const response = await http.get<IRequest[]>('pedidos', {
          headers: {
            Authorization: `Bearer ${token.get({ tokenVerify: true })}`,
          },
        });
        return response.data;
      } catch (error) {
        alert(`Ocorreu um erro durante a coleta de pedidos: ${error}`);
        throw new Error(`Ocorreu um erro: ${error}`);
      }
    },
    delete: async (id: number) => {
      try {
        http.delete(`pedidos/${id}`, {
          headers: {
            Authorization: `Bearer ${token.get({ tokenVerify: true })}`,
          },
        });
      } catch (error) {
        alert(`Ocorreu um erro durante a exclusão do pedido: ${error}`);
        throw new Error(`Ocorreu um erro: ${error}`);
      }
    },
  };
  const userCalls = {
    register: (user: NewUserProps, auxFunction: () => void) => {
      http
        .post('public/registrar', user)
        .then(() => {
          alert('Usuário cadastrado com sucesso!');
          auxFunction();
        })
        .catch(error => {
          alert(`Ocorreu um erro durante o processo de registro: ${error}`);
          throw new Error(`Ocorreu um erro: ${error}`);
        });
    },

    login: (user: UserProps, auxFunction: () => void) => {
      http
        .post('public/login', user)
        .then(response => {
          token.set(response.data.access_token);
          auxFunction();
        })
        .catch(error => {
          if (error?.response?.data?.message)
            return alert(error?.response?.data?.message);
          return alert('Ocorreu um erro inesperado ao efetuar login');
        });
    },
  };

  return { userCalls, requestsCalls };
};

export default serviceApiCommunication;
