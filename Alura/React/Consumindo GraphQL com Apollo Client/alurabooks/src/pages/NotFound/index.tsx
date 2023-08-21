import { colors } from 'components/UI/variables';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import icons from 'data/icons.json';
import styled from 'styled-components';

export default function NotFound({ text }: { text?: string }) {
  const navigate = useNavigate();
  return (
    <Main>
      <Button
        className="back-button"
        onClick={() => navigate(-1)}
        title="Voltar a pagina inicial"
        type="button"
        $variantType="Secondary"
      />
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
  height: inherit;
  justify-items: center;
  padding: 1rem;
  row-gap: 2rem;
  width: inherit;

  @media screen and (min-width: 1024px) {
    padding: 4rem;
  }

  .back-button {
    align-self: start;
    justify-self: start;
    padding: 0.5rem;
    display: flex;
    border-radius: 50%;

    @media screen and (min-width: 1024px) {
      padding: 1rem;
    }

    &::before {
      -webkit-mask: url(${icons.arrow});
      -webkit-mask-position: center;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-size: contain;
      background-color: ${colors.mostarda};
      content: '';
      height: 1rem;
      mask-position: center;
      mask-repeat: no-repeat;
      mask-size: contain;
      mask: url(${icons.arrow});
      scale: -1;
      width: 1rem;

      @media screen and (min-width: 1024px) {
        height: 2rem;
        width: 2rem;
      }
    }

    &:hover::before {
      background-color: ${colors.mostardaEscura};
    }
  }
`;

const Title = styled.h2`
  color: ${colors.branca};
  font-size: 2rem;
  text-align: center;

  @media screen and (min-width: 1024px) {
    font-size: 10rem;
  }
`;

const Text = styled.p`
  color: ${colors.branca};
  font-size: 1rem;
  text-align: center;

  @media screen and (min-width: 1024px) {
    font-size: 4rem;
  }
`;
