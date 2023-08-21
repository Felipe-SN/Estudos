import { colors } from 'components/UI/variables';
import InputField from 'components/InputField';
import styled from 'styled-components';

export default function NewsLetter() {
  return (
    <NewsLetterSection>
      <h4>Fique por dentro das novidades!</h4>
      <p>Atualizações de e-books, novos livros, promoções e outros.</p>
      <InputField placeholder="Cadastre seu e-mail" type="email" />
    </NewsLetterSection>
  );
}

const NewsLetterSection = styled.section`
  background-color: ${colors.branca};
  display: grid;
  justify-content: center;
  padding-bottom: 2rem;
  padding-top: 1.5rem;

  & h4 {
    background: ${colors.gradienteAzul};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  & p {
    background: ${colors.gradienteAzul};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-weight: 300;
    margin-bottom: 1.5rem;
    max-width: 23.5rem;
  }

  & input {
    max-height: 2.75rem;
    max-width: 23.75rem;
  }

  @media screen and (min-width: 1024px) {
    align-items: center;
    column-gap: 6rem;
    grid-template-areas: 'title email' 'sentence email';
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: repeat(2, max-content);
    padding-bottom: 3rem;
    padding-top: 1.5rem;

    & h4 {
      font-size: 1.5rem;
      grid-area: title;
      margin-bottom: 1.2rem;
      max-width: 15.9375rem;
    }

    & p {
      grid-area: sentence;
      margin: 0;
      max-width: 18.8125rem;
    }

    & span {
      grid-area: email;

      & input {
        max-width: 20.43163rem;
      }
    }
  }

  @media screen and (min-width: 1728px) {
    column-gap: 1.5rem;
    padding-bottom: 4rem;
    padding-top: 4rem;

    & h4 {
      font-size: 1.5rem;
      margin: 0;
      max-width: 25.0625rem;
    }

    & p {
      margin: 0;
      max-width: 18.75rem;
    }

    & input {
      max-width: 21.75rem;
    }
  }
`;
