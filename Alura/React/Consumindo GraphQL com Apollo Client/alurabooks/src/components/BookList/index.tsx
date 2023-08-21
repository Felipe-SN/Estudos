import { bookFilterVar, booksVar } from 'graphQL/books/state';
import { colors } from 'components/UI/variables';
import { useBooksQueryByCategoryID } from 'graphQL/books/hooks';
import { useEffect, useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import Category from 'types/Category';
import InputField from 'components/InputField';
import Loader from 'components/Loader';
import MiniCard from 'components/MiniCard';
import styled from 'styled-components';

export default function BookList({ category }: { category: Category }) {
  const { loading } = useBooksQueryByCategoryID();
  const [searchText, setSearchText] = useState<string>('');
  const books = useReactiveVar(booksVar);

  useEffect(() => {
    bookFilterVar({
      categoria: category,
      titulo: searchText.length >= 3 ? searchText : '',
    });
  }, [category, searchText]);

  return (
    <BookListSection>
      <InputField
        $hasIcon={false}
        onChange={e => setSearchText(e.target.value)}
        placeholder="Digite o título ou autor do livro"
        type="search"
        value={searchText}
      />
      <ul>
        {loading ? (
          <Loader />
        ) : (
          books.map(book => (
            <li key={book.id}>
              <MiniCard {...book} />
            </li>
          ))
        )}
      </ul>
    </BookListSection>
  );
}

const BookListSection = styled.section`
  background-color: ${colors.branca};
  display: grid;
  justify-content: center;
  padding: 3rem 1.5rem 5rem 1.5rem;

  @media screen and (min-width: 1024px) {
    justify-items: center;
    padding-bottom: 12rem;
    padding-top: 6rem;
  }

  & span {
    margin-bottom: 2.125rem;

    @media screen and (min-width: 1024px) {
      max-width: 48.1875rem;
    }

    & input {
      max-height: 3.5rem;
      max-width: 23.75rem;
      text-align: center;

      @media screen and (min-width: 1024px) {
        max-width: 48.1875rem;
      }

      &::placeholder {
        color: ${colors.azul};
      }
    }
  }

  & ul {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, 11.125rem);
    justify-content: center;

    @media screen and (min-width: 1024px) {
      column-gap: 1.125rem;
      grid-template-columns: repeat(auto-fit, 15.25rem);
      max-width: 64.875rem;
      row-gap: 5rem;
    }
  }
`;
