import { colors } from 'components/UI/variables';
import { Link } from 'react-router-dom';
import Book from 'types/Book';
import Button from 'components/Button';
import styled from 'styled-components';

export default function MiniCard(book: Book) {
  return (
    <MiniCardWrapper>
      <img src={book.imagemCapa} alt={book.titulo} />
      <Link to={`/livro/${book.slug}`}>
        <Button className="mini-card__button" type="button" $text="Comprar" />
      </Link>
    </MiniCardWrapper>
  );
}

const MiniCardWrapper = styled.div`
  --cardWidthNormal: 15.25rem;
  --cardWidthSmall: 11.125rem;

  background-color: ${colors.branca};
  display: grid;
  justify-items: center;
  max-width: var(--cardWidthSmall);
  overflow: hidden;
  row-gap: 0.5rem;

  @media screen and (min-width: 1024px) {
    max-width: var(--cardWidthNormal);
  }

  & img {
    /* filter: drop-shadow(0.125rem 0.25rem 0.5rem ${colors.sombra}); */
    max-width: var(--cardWidthSmall);

    @media screen and (min-width: 1024px) {
      max-width: var(--cardWidthNormal);
    }
  }

  & a {
    width: 100%;

    & .mini-card__button {
      height: 3.875rem;
      width: 100%;
    }
  }
`;
