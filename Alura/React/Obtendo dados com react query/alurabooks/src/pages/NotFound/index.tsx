import { colors } from 'components/UI/variables';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import icons from 'data/icons.json';
import styled from 'styled-components';

export default function NotFound({ text }: { text?: string }) {
  const navigate = useNavigate();
  return (
    <Main>
      <BackButton onClick={() => navigate(-1)} title=" Voltar a pagina inicial" type="button" variantType="Secondary" />
      {!text && <Title>Erro 404</Title>}
      <Text>{'Ops! Algum erro inesperado aconteceu!'}</Text>
      <Title>{text}</Title>
    </Main>
  );
}

const Main = styled.section`
  background: ${colors.gradienteAzul};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  height: 1fr;
  justify-items: center;
  padding: 2rem;
  row-gap: 2rem;
  width: 1fr;
  padding: 4rem;
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
  line-height: 12rem;
  text-align: center;
`;

const Text = styled.p`
  color: ${colors.branca};
  font-size: 4rem;
  line-height: 6rem;
  text-align: center;
`;
