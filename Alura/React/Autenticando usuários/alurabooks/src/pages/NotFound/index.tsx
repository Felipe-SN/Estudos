import Button from 'components/Button';
import { colors } from 'components/UI/variables';
import icons from 'data/icons.json';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
  background: ${colors.gradienteAzul};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  height: 100vh;
  justify-items: center;
  width: 100vw;
  padding: 2rem;
`;

const BackButton = styled(Button)`
  align-self: start;
  justify-self: start;
  display: flex;
  padding: 1rem;
  border-radius: 50%;

  ::before {
    mask: url(${icons.arrow});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    background-color: ${colors.mostarda};
    width: 2rem;
    height: 2rem;
    content: '';
    scale: -1;
  }

  :hover::before {
    background-color: ${colors.mostardaEscura};
  }
`;

const Title = styled.h2`
  color: ${colors.branca};
  font-size: 10rem;
`;

const Text = styled.p`
  color: ${colors.branca};
  font-size: 4rem;
  text-align: center;
`;

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <BackButton
        onClick={() => navigate('/', { replace: true })}
        title=" Voltar a pagina inicial"
        variantType="Secondary"
      ></BackButton>
      <Title>Erro 404</Title>
      <Text>Pagina não encontrada ou recurso inexistente!</Text>
    </Main>
  );
};

export default NotFound;
