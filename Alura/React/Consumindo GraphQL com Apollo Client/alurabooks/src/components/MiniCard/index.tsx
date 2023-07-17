import { colors } from 'components/UI/variables';
import { Link } from 'react-router-dom';
import { priceFormatter } from 'helpers/formatters';
import Book from 'types/Book';
import Button from 'components/Button';
import styled from 'styled-components';

export default function MiniCard(book: Book) {
  const minPrice = Math.min(...book.opcoesCompra.map(op => op.preco));

  return (
    <MiniCardWrapper>
      <Cover src={book.imagemCapa} alt={book.titulo} />
      <Info>
        <li>
          <h4>{book.titulo}</h4>
        </li>
        <li>
          <p>
            A partir de: <strong>{priceFormatter(minPrice)}</strong>
          </p>
        </li>
      </Info>
      <Link to={`/livro/${book.slug}`}>
        <Button className="mini-card__button" type="button" $text="Comprar" />
      </Link>
    </MiniCardWrapper>
  );
}
const cardWidth = '15.25rem';

const MiniCardWrapper = styled.div`
  background-color: ${colors.branca};
  display: grid;
  justify-items: center;
  max-height: 33.625rem;
  max-width: ${cardWidth};
  overflow: hidden;

  & a {
    width: 100%;
  }

  .mini-card__button {
    height: 3.875rem;
    width: 100%;
  }
`;

const Cover = styled.img`
  /* filter: drop-shadow(0.125rem 0.25rem 0.5rem ${colors.sombra}); */
  height: 21.5rem;
  max-height: 21.5rem;
  max-width: ${cardWidth};
`;

const Info = styled.ul`
  color: ${colors.azul};
  display: grid;
  padding-bottom: 1rem;
  padding-top: 1rem;
  text-align: center;
  width: 100%;

  & li {
    h4 {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.625rem;
      max-width: ${cardWidth};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      display: grid;
      font-size: 1.5rem;
      line-height: 2.25rem;

      strong {
        font-weight: 700;
      }
    }
  }
`;
