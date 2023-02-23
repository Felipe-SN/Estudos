import InputField from 'components/InputField';
import { colors } from 'components/UI/variables';
import styled from 'styled-components';

const StyledSection = styled.section`
  align-items: center;
  background-color: ${colors.branca};
  column-gap: 1.5rem;
  display: grid;
  grid-template-areas: 'title email' 'text email';
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, max-content);
  justify-content: center;
  padding-bottom: 4rem;
  padding-top: 4rem;

  > h4 {
    background: ${colors.gradienteAzul};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-size: 1.5rem;
    font-weight: 500;
    grid-area: title;
    line-height: 2.25rem;
  }

  > p {
    background: ${colors.gradienteAzul};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-size: 1rem;
    font-weight: 300;
    grid-area: text;
    line-height: 1.5rem;
    max-width: 23.5rem;
  }
`;

const CustomInput = styled(InputField)`
  grid-area: email;
  max-height: 2.75rem;
  max-width: 21.75rem;
`;

const NewsLetter = () => {
  return (
    <StyledSection>
      <h4>Fique por dentro das novidades!</h4>
      <p>Atualizações de e-books, novos livros, promoções e outros.</p>
      <CustomInput placeholder="Cadastre seu e-mail" type="email" />
    </StyledSection>
  );
};

export default NewsLetter;
