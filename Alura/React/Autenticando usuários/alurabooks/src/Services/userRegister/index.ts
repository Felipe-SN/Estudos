import axios from 'axios';

type NewUserProps = {
  email: string;
  senha: string;
  nome: string;
  endereco: string;
  complemento: string;
  cep: string;
};

const userRegister = async (newUser: NewUserProps, clearFields: () => void) => {
  try {
    await axios.post('http://localhost:8000/public/registrar', newUser);
    alert('Usuário cadastrado com sucesso!');
    clearFields();
  } catch (error) {
    alert(`Ocorreu um erro durante o processo de registro: ${error}`);
    console.log(`Ocorreu um erro durante o processo de registro: ${error}`);
    return;
  }
};

export default userRegister;
