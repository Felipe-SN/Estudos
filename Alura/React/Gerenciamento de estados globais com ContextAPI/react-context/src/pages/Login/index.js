import { Button } from '@material-ui/core';
import { Container, Titulo, InputContainer } from './styles';
import { Input, InputLabel, InputAdornment } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from 'common/context/User';

const Login = () => {
  const navigate = useNavigate();
  const { nome, setNome, saldo, setSaldo } = useUserContext();

  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          onChange={e => setNome(e.target.value)}
          type="text"
          value={nome}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          onChange={e => setSaldo(e.target.value)}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          type="number"
          value={saldo}
        />
      </InputContainer>
      <Button
        color="primary"
        disabled={nome.length < 4 || saldo < 2}
        onClick={() => navigate('/feira')}
        variant="contained"
      >
        Avançar
      </Button>
    </Container>
  );
};

export default Login;
