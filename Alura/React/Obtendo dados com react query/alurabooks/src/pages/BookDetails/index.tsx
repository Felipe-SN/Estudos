import { colors } from 'components/UI/variables';
import { useParams } from 'react-router-dom';
import Banner from 'components/Banner';
import Button from 'components/Button';
import CounterInput from 'components/CounterInput';
import Loader from 'components/Loader';
import NotFound from 'pages/NotFound';
import OptionsGroup from 'components/OptionsGroup';
import styled from 'styled-components';
import useBookQueryBySlug from 'state/reactQuery/hooks/useBookQueryBySlug';

export default function BookDetails() {
  const { slug = '' } = useParams();
  const { data: book, isLoading, error } = useBookQueryBySlug(slug);

  if (error) {
    return (
      <ShowCase>
        <NotFound text={error.message} />
      </ShowCase>
    );
  }

  if (!isLoading && book === null)
    return (
      <ShowCase>
        <NotFound text="Livro não encontrado!" />;
      </ShowCase>
    );

  return (
    <>
      <Banner title="Detalhes do livro" variantType="gradient" />
      <ShowCase>
        {isLoading ? (
          <Loader />
        ) : (
          <BookData>
            <BookInfo>
              <img src={book?.imagemCapa} alt={book?.titulo} />
              <h2>{book?.titulo}</h2>
              <p>{book?.descricao}</p>
              <h3>Por: {book?.autor?.nome}</h3>
              <div className="book-formats">
                <label>Selecione o formato de seu livro:</label>
                <OptionsGroup options={book?.opcoesCompra} />
                <span>*Você terá acesso às futuras atualizações do livro.</span>
              </div>
              <CounterInput label="Quantidade" />
              <Button text="Comprar" />
            </BookInfo>
            <BookAbout>
              <h3>Sobre o Autor</h3>
              <p>{book?.autor?.sobre}</p>
              <h3>Sobre o livro</h3>
              <p>{book?.sobre}</p>
            </BookAbout>
          </BookData>
        )}
      </ShowCase>
    </>
  );
}

const ShowCase = styled.section`
  align-items: center;
  background-color: ${colors.branca};
  display: grid;
  justify-items: center;
  padding-bottom: 8.25rem;
  padding-top: 6.5rem;
`;

const BookData = styled.div`
  display: grid;
  max-height: 58.125rem;
  max-width: 65rem;
  row-gap: 2.5rem;
`;

const BookInfo = styled.div`
  align-items: start;
  column-gap: 2rem;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(6, auto);
  justify-items: start;
  grid-template-areas:
    'cover title'
    'cover description'
    'cover author'
    'cover formats'
    'cover info5'
    'cover info6';

  > img {
    filter: drop-shadow(0.25rem 0.25rem 1rem ${colors.sombra});
    grid-area: cover;
    max-width: 23.625rem;
    width: 23.625rem;
  }

  > h2 {
    background: ${colors.gradienteAzul};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-size: 2rem;
    font-weight: 700;
    grid-area: title;
    line-height: 3rem;
    margin-bottom: 0.5rem;
  }

  > p {
    color: ${colors.pretoMidOpacity};
    font-size: 1.125rem;
    grid-area: description;
    letter-spacing: 0em;
    line-height: 1.75rem;
    margin-bottom: 1rem;
  }

  > h3 {
    color: ${colors.pretoMidOpacity};
    font-size: 0.875rem;
    grid-area: author;
    letter-spacing: 0em;
    line-height: 1.25rem;
  }

  > .book-formats {
    display: grid;
    grid-area: formats;
    margin-bottom: 2.75rem;
    margin-top: 2.75rem;
    row-gap: 1rem;

    > label {
      background: ${colors.gradienteAzul};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      font-weight: 700;
      line-height: 1.5rem;
    }
    > span {
      color: ${colors.pretoLowOpacity};
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.25rem;
    }
  }

  > button {
    margin-top: 2rem;
  }
`;

const BookAbout = styled.div`
  display: grid;
  row-gap: 1.5rem;

  > h3 {
    border-bottom: 0.125rem solid ${colors.mostarda};
    color: ${colors.azul};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.25rem;
    padding-bottom: 0.625rem;
    padding-top: 0.625rem;
    width: 12.5rem;
    text-align: center;
  }

  > p {
    color: ${colors.pretoMidOpacity};
    line-height: 1.5rem;
  }
`;
