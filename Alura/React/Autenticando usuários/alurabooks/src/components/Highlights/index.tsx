import icons from "data/icons.json";
import Card from "components/Card";
import IBook from "interfaces/IBook";
import { useState } from "react";
import Button from "components/Button";
import styled, { css } from "styled-components";
import { colors } from "components/UI/variables";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(2, auto);
  place-items: center;

  > h2 {
    background-color: ${colors.branca};
    color: ${colors.mostarda};
    font-size: 1.625rem;
    font-weight: 700;
    line-height: 2.375rem;
    padding-bottom: 1rem;
    padding-top: 3.25rem;
    text-align: center;
    text-transform: uppercase;
    width: 100vw;
  }

  > div {
    column-gap: 2.875rem;
    display: grid;
    grid-template-columns: repeat(2, auto);
    margin-bottom: 5.375rem;
    margin-top: 2.875rem;
    width: 100vw;
  }
`;

const BooksHighlighted = styled.ul`
  align-items: center;
  box-sizing: border-box;
  column-gap: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  height: 23.125rem;
  justify-self: end;
  width: 41.75rem;
`;

const StyledBook = styled.li<StyledBookProps>`
  filter: drop-shadow(0.125rem 0.25rem 0.5rem ${colors.sombraFiltro});
  > img {
    transition-duration: 500ms;
    transition-property: width;
    transition-timing-function: ease-in-out;
    width: 11.25rem;
    ${(props) =>
      props.selectedID &&
      css`
        width: 16.375rem;
      `}
  }
`;

const StyledCard = styled(Card)`
  align-content: stretch;
  gap: 1rem;
  grid-template-areas:
    "about icons"
    "title title"
    "desc desc"
    "price buy-button";
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto);
  height: 100%;
  justify-items: start;
  padding-bottom: 3rem;
  padding-left: 3rem;
  padding-right: 2rem;
  padding-top: 3rem;
  width: 100%;

  > h2 {
    color: ${colors.mostarda};
    font-size: 2rem;
    font-weight: 700;
    grid-area: about;
    letter-spacing: 0rem;
    line-height: 3rem;
  }

  > h3 {
    color: ${colors.azul};
    font-size: 1.125rem;
    font-weight: 700;
    grid-area: title;
    letter-spacing: 0rem;
    line-height: 1.625rem;
  }
`;

const StyledIcons = styled.div`
  align-self: flex-start;
  display: grid;
  gap: 1.25rem;
  grid-area: icons;
  grid-template-columns: repeat(2, max-content);
  justify-self: end;

  > button {
    align-items: center;
    background-color: transparent;
    border-radius: 50%;
    border: none;
    box-sizing: border-box;
    column-gap: 0.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 0;

    > img {
      height: 2rem;
      width: 2rem;
    }
  }
`;

const Description = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  grid-area: desc;
  height: 4.375rem;
  max-width: 22rem;
  > p {
    color: ${colors.pretoMidOpacity};
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0rem;
    line-height: 1.313rem;
  }
`;

const StyledPrice = styled.div`
  display: grid;
  grid-area: price;

  > em {
    color: ${colors.pretoLowOpacity};
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0rem;
    line-height: 1.313rem;
  }

  > strong {
    color: ${colors.azul};
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: 0rem;
    line-height: 3.375rem;
  }
`;

const ButtonPosition = styled(Button)`
  align-self: end;
  grid-area: buy-button;
  justify-self: end;
`;

interface StyledBookProps {
  selectedID: boolean;
}

interface HighlightsProps {
  books: IBook[];
  title: string;
}

const Highlight = ({ books, title }: HighlightsProps) => {
  const [selectedBook, setSelectedBook] = useState<IBook>(books[1]);

  const handleClick = (book: IBook) => {
    setSelectedBook(book);
  };

  return (
    <StyledSection>
      <h2>{title}</h2>
      <div>
        <BooksHighlighted>
          {books.map((book) => (
            <StyledBook
              key={book.id}
              selectedID={book.id === selectedBook.id}
              onClick={() => handleClick(book)}
            >
              <img src={book.img} alt={`Livro sobre ${book.title}`} />
            </StyledBook>
          ))}
        </BooksHighlighted>
        <StyledCard>
          <h2>Sobre o livro:</h2>
          <StyledIcons>
            <button>
              <img alt="Carrinho de compras" src={icons.sacola} />
            </button>
            <button>
              <img alt="Meus favoritos" src={icons.favoritos} />
            </button>
          </StyledIcons>
          <h3>{selectedBook.title}</h3>
          <Description>
            <p>{selectedBook.resume}</p>
            <p>{`Por: ${selectedBook.author}`}</p>
          </Description>
          <StyledPrice>
            <em>A partir de:</em>
            <strong>
              {Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(selectedBook.price)}
            </strong>
          </StyledPrice>
          <ButtonPosition>Comprar</ButtonPosition>
        </StyledCard>
      </div>
    </StyledSection>
  );
};

export default Highlight;
