import http from 'http/instance';
import sessionTokenHelper from 'helpers/sessionTokenHelper';

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
  const register = (user: NewUserProps, auxFunction: () => void) => {
    http
      .post('registrar', user)
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        auxFunction();
      })
      .catch(error => {
        alert(`Ocorreu um erro durante o processo de registro: ${error}`);
        throw new Error(`Ocorreu um erro: ${error}`);
      });
  };

  const login = (user: UserProps, auxFunction: () => void) => {
    http
      .post('login', user)
      .then(response => {
        token.set(response.data.access_token);
        auxFunction();
      })
      .catch(error => {
        if (error?.response?.data?.message)
          return alert(error?.response?.data?.message);
        return alert('Ocorreu um erro inesperado ao efetuar login');
      });
  };

  return { register, login };
};

export default serviceApiCommunication;
