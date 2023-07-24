import { bookFilterVar, booksVar } from 'graphQL/books/state';
import { colors } from 'components/UI/variables';
import { useBooksQueryByCategoryID } from 'graphQL/books/hooks';
import { useReactiveVar } from '@apollo/client';
import { useEffect, useState } from 'react';
import Button from 'components/Button';
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
    <>
      <SearchArea>
        <InputField
          $hasIcon={false}
          onChange={e => setSearchText(e.target.value)}
          placeholder="Digite o título ou autor do livro"
          type="search"
          value={searchText}
        />
      </SearchArea>
      <ShowCase>
        {loading ? (
          <Loader />
        ) : (
          books.map(book => (
            <li key={book.id}>
              <MiniCard {...book} />
            </li>
          ))
        )}
      </ShowCase>
    </>
  );
}

const SearchArea = styled.form`
  display: grid;
  justify-items: center;
  justify-self: center;
  margin-bottom: 4.125rem;
  max-width: 48.1875rem;
  row-gap: 1rem;

  & input {
    max-height: 3.5rem;
    max-width: 48.1875rem;
    text-align: center;

    &::placeholder {
      color: ${colors.azul};
    }
  }

  & button {
    width: 10.5625rem;
  }
`;

const ShowCase = styled.ul`
  align-items: center;
  column-gap: 1.125rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 15.25rem);
  justify-content: center;
  justify-items: center;
  justify-self: center;
  max-width: 64.875rem;
  row-gap: 5rem;
`;
