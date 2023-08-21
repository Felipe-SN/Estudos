import { bookDetailsVar } from 'graphQL/books/state';
import { colors } from 'components/UI/variables';
import { useBookQueryBySlug } from 'graphQL/books/hooks';
import { useParams } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import Banner from 'components/Banner';
import Button from 'components/Button';
import CounterInput from 'components/CounterInput';
import Loader from 'components/Loader';
import NotFound from 'pages/NotFound';
import OptionsGroup from 'components/OptionsGroup';
import styled from 'styled-components';
import TagList from 'components/TagsList';

export default function BookDetails() {
  const { slug = '' } = useParams();
  const { error, loading } = useBookQueryBySlug(slug);
  const book = useReactiveVar(bookDetailsVar);

  if (error) {
    return (
      <ShowCase>
        <NotFound text={error.message} />
      </ShowCase>
    );
  }

  if (!loading && book === null)
    return (
      <ShowCase>
        <NotFound text="Livro não encontrado!" />;
      </ShowCase>
    );

  return (
    <>
      <Banner title="Detalhes do livro" $variantType="gradient" />
      <ShowCase>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="book-info">
              <img src={book?.imagemCapa} alt={book?.titulo} />
              <h2>{book?.titulo}</h2>
              <p>{book?.descricao}</p>
              <h3>Por: {book?.autor?.nome}</h3>
              <div className="book-formats">
                <label>Selecione o formato de seu livro:</label>
                <OptionsGroup options={book?.opcoesCompra} />
                <span>*Você terá acesso às futuras atualizações do livro.</span>
              </div>
              <CounterInput className="counter" label="Quantidade" />
              <Button $text="Comprar" />
            </div>
            <div className="book-about">
              <h3>Sobre o Autor</h3>
              <p>{book?.autor?.sobre}</p>
              <h3>Sobre o livro</h3>
              <p>{book?.sobre}</p>
              <TagList tags={book.tags} $variantType="secondary" />
            </div>
          </>
        )}
      </ShowCase>
    </>
  );
}

const ShowCase = styled.section`
  background-color: ${colors.branca};
  display: grid;
  padding: 2.125rem 1.5rem 1.5rem 1.5rem;

  @media screen and (min-width: 1024px) {
    align-items: center;
    justify-items: center;
    padding-bottom: 5rem;
    padding-top: 6.5rem;
  }

  & > .book-info {
    column-gap: 1.5rem;
    display: grid;
    grid-template-areas:
      'cover title'
      'cover description'
      'cover author'
      'cover .'
      'formats formats'
      'counter counter'
      'buy-btn buy-btn';
    margin-bottom: 2.125rem;

    @media screen and (min-width: 1024px) {
      align-items: start;
      column-gap: 2rem;
      grid-template-areas:
        'cover title'
        'cover description'
        'cover author'
        'cover formats'
        'cover counter'
        'cover buy-btn';
      justify-items: start;
      max-width: 65rem;
    }

    & > img {
      box-shadow: 0.25rem 0.25rem 1rem ${colors.sombra};
      grid-area: cover;
      width: 11.125rem;

      @media screen and (min-width: 1024px) {
        width: 23.625rem;
      }
    }

    & > h2 {
      background: ${colors.gradienteAzul};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      font-weight: 700;
      grid-area: title;
      margin-bottom: 0.75rem;

      @media screen and (min-width: 1024px) {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }
    }

    & > p {
      color: ${colors.pretoMidOpacity};
      font-size: 1.125rem;
      grid-area: description;
      margin-bottom: 0.75rem;

      @media screen and (min-width: 1024px) {
        margin-bottom: 1rem;
      }
    }

    & > h3 {
      color: ${colors.pretoMidOpacity};
      font-size: 0.75rem;
      grid-area: author;

      @media screen and (min-width: 1024px) {
        font-size: 0.875rem;
      }
    }

    & .book-formats {
      display: grid;
      grid-area: formats;
      margin-bottom: 2.75rem;
      margin-top: 2.75rem;
      row-gap: 1rem;

      & > label {
        background: ${colors.gradienteAzul};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        font-weight: 700;
      }
      & > span {
        color: ${colors.pretoLowOpacity};
        font-size: 0.875rem;
        font-weight: 700;
      }
    }

    & .counter {
      grid-area: counter;
    }

    & > button {
      justify-self: flex-start;
      grid-area: buy-btn;
      margin-top: 2rem;
      padding: 0.5rem 1rem;

      @media screen and (min-width: 1728px) {
        padding: 1rem 1.5rem;
      }
    }
  }

  & .book-about {
    display: grid;
    max-width: 65rem;
    row-gap: 1.5rem;

    & > h3 {
      color: ${colors.azul};
      font-weight: 700;
      border-bottom: 0.125rem solid ${colors.mostarda};
      text-align: center;

      @media screen and (min-width: 1024px) {
        font-size: 1.5rem;
        padding-bottom: 0.625rem;
        padding-top: 0.625rem;
        width: 12.5rem;
      }
    }

    & > p {
      color: ${colors.pretoMidOpacity};
      white-space: break-spaces;
      text-align: justify;
    }
  }
`;
