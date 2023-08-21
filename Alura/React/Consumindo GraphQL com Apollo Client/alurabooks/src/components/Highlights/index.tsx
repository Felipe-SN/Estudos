import { colors } from 'components/UI/variables';
import { Link } from 'react-router-dom';
import { priceFormatter } from 'helpers/formatters';
import { useEffect, useRef, useState } from 'react';
import Book from 'types/Book';
import Button from 'components/Button';
import Card from 'components/Card';
import icons from 'data/icons.json';
import Loader from 'components/Loader';
import styled from 'styled-components';

export default function Highlight({ books, title, isLoading }: HighlightsProps) {
  const [selectedBook, setSelectedBook] = useState<Book>();
  const listRef = useRef() as React.MutableRefObject<HTMLUListElement>;

  useEffect(() => {
    if (window.screen.width < 575 && listRef.current) {
      listRef.current.scrollTo({ left: 50, behavior: 'instant' });
    }
    if (books) setSelectedBook(books[1]);
  }, [books]);

  const handleClick = (book: Book, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (window.screen.width < 575)
      e.currentTarget.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
    setSelectedBook(book);
  };

  const getMinPrice = (book: Book) => Math.min(...book.opcoesCompra.map(op => op.preco));

  if (books)
    return (
      <SectionHighlight>
        <h2>{title}</h2>
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <ul className="highlights-list" ref={listRef}>
              {books.map(book => (
                <li key={book.id} onClick={e => handleClick(book, e)}>
                  <BookCover $selectedID={book.id === selectedBook?.id} src={book.imagemCapa} alt={book.titulo} />
                </li>
              ))}
            </ul>
          )}
          {selectedBook && (
            <>
              <Card className="highlights-card">
                <h2>Sobre o livro:</h2>
                <div className="card__icons">
                  <button className="fav-icon" title="Meus favoritos" type="button" />
                  <button className="cart-icon" title="Carrinho de compras" type="button" />
                </div>
                <h3>{selectedBook.titulo}</h3>
                <div className="card__description">
                  <p>{selectedBook.descricao}</p>
                  <p>{`Por: ${selectedBook.autor?.nome}`}</p>
                </div>
                <div className="card__price-area">
                  <em>A partir de:</em>
                  <strong>{priceFormatter(getMinPrice(selectedBook))}</strong>
                </div>
                <Link className="card__buy-button" to={`/livro/${selectedBook.slug}`}>
                  <Button $text="Comprar" />
                </Link>
              </Card>
            </>
          )}
        </div>
      </SectionHighlight>
    );
}

const SectionHighlight = styled.section`
  display: grid;
  place-items: center;

  & > h2 {
    background-color: ${colors.branca};
    color: ${colors.mostarda};
    font-size: 1.125rem;
    font-weight: 700;
    padding-bottom: 0.5rem;
    padding-top: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    width: 100vw;

    @media screen and (min-width: 1024px) {
      font-size: 1.625rem;
      padding-bottom: 1rem;
      padding-top: 3.5rem;
    }

    @media screen and (min-width: 1728px) {
      padding-top: 3.25rem;
    }
  }

  & > div {
    display: grid;
    margin-bottom: 2rem;
    margin-top: 1rem;
    row-gap: 3rem;
    justify-items: center;

    @media screen and (min-width: 1024px) {
      margin-bottom: 2rem;
      margin-top: 2rem;
      row-gap: 2.75rem;
    }

    @media screen and (min-width: 1728px) {
      column-gap: 2.875rem;
      grid-template-columns: repeat(2, max-content);
      margin-bottom: 5.375rem;
      margin-top: 2.875rem;
    }

    & > .highlights-list {
      align-items: center;
      column-gap: 1.25rem;
      display: flex;
      overflow-x: scroll;
      width: -webkit-fill-available;

      @media screen and (min-width: 1024px) {
        column-gap: 1.5rem;
        height: 25.5rem;
      }

      @media screen and (min-width: 1728px) {
        height: 24rem;
      }

      &::-webkit-scrollbar {
        display: none;
      }

      & > li {
        filter: drop-shadow(0.125rem 0.25rem 0.5rem ${colors.sombraFiltro});
      }
    }

    & > .highlights-card {
      grid-template-areas:
        'about about'
        'title title'
        'desc desc'
        'price price'
        'icons buy-button';
      justify-items: start;
      padding: 1rem 1rem 1.75rem 1rem;
      row-gap: 0.5rem;
      width: 23.75rem;

      @media screen and (min-width: 1024px) {
        grid-template-areas:
          'about icons'
          'title title'
          'desc desc'
          'price buy-button';
        padding: 1.5rem;
        width: 45.3125rem;
      }

      @media screen and (min-width: 1728px) {
        gap: 1rem;
        padding: 3rem 2rem;
        width: 34.4375rem;
      }

      & > h2 {
        color: ${colors.mostarda};
        font-weight: 700;
        grid-area: about;

        @media screen and (min-width: 1728px) {
          font-size: 2rem;
        }
      }

      & > h3 {
        color: ${colors.azul};
        font-size: 1.125rem;
        font-weight: 700;
        grid-area: title;
      }

      .card__icons {
        display: grid;
        gap: 1.25rem;
        grid-area: icons;
        grid-template-columns: repeat(2, max-content);
        justify-self: start;

        @media screen and (min-width: 1024px) {
          gap: 2rem;
          justify-self: end;
        }

        @media screen and (min-width: 1728px) {
          gap: 1.25rem;
        }

        .cart-icon {
          background-image: url(${icons.sacola});
        }

        .fav-icon {
          background-image: url(${icons.favoritos});
        }

        .fav-icon,
        .cart-icon {
          background-color: transparent;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          border: none;
          cursor: pointer;
          height: 2rem;
          width: 2rem;
        }
      }

      .card__description {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        grid-area: desc;
        max-width: 22rem;

        @media screen and (min-width: 1024px) {
          max-width: 100%;
          margin-bottom: 1.2rem;
        }

        @media screen and (min-width: 1728px) {
          max-width: 22rem;
          margin-bottom: 0;
        }

        & > p {
          color: ${colors.pretoMidOpacity};
          font-size: 0.875rem;

          &:first-child {
            min-height: 2rem;

            @media screen and (min-width: 1024px) {
              min-height: 0;
            }

            @media screen and (min-width: 1728px) {
              min-height: 2rem;
            }
          }
        }
      }

      .card__price-area {
        align-items: center;
        display: flex;
        gap: 0.5rem;
        grid-area: price;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;

        @media screen and (min-width: 1024px) {
          align-items: start;
          flex-direction: column;
          margin: 0;
        }

        & > em {
          color: ${colors.pretoLowOpacity};

          @media screen and (min-width: 1728px) {
            font-size: 0.875rem;
          }
        }

        & > strong {
          color: ${colors.azul};
          font-size: 1.5rem;
          font-weight: 700;

          @media screen and (min-width: 1024px) {
            font-size: 2.25rem;
          }
        }
      }

      .card__buy-button {
        align-self: end;
        grid-area: buy-button;
        justify-self: end;

        & > button {
          padding: 0.5rem 1rem;
          width: 10.0625rem;

          @media screen and (min-width: 1024px) {
            padding: 1rem 1.5rem;
            width: 10.5625rem;
          }
        }
      }
    }
  }
`;

const BookCover = styled.img<{ $selectedID: boolean }>`
  object-fit: contain;
  object-position: center;
  width: 11.1875rem;

  @media screen and (min-width: 1024px) {
    transition-duration: 500ms;
    transition-property: width;
    transition-timing-function: ease-in-out;
    width: ${props => (props.$selectedID ? '17.56981rem' : '12rem')};
  }

  @media screen and (min-width: 1728px) {
    width: ${props => (props.$selectedID ? '16.375rem' : '11.25rem')};
  }
`;

type HighlightsProps = {
  books: Book[] | null | undefined;
  isLoading: boolean;
  title: string;
};
