import Category from 'types/Category';
import Loader from 'components/Loader';
import MiniCard from 'components/MiniCard';
import styled from 'styled-components';
import useQueryBooksByCategoryID from 'state/apolloClient/hooks/useQueryBooksByCategoryID';

export default function BookList({ category }: { category: Category }) {
  const { data, loading } = useQueryBooksByCategoryID(category.id);

  return (
    <ShowCase>
      {loading ? (
        <Loader />
      ) : (
        data?.livros.map(book => (
          <li key={book.id}>
            <MiniCard {...book} />
          </li>
        ))
      )}
    </ShowCase>
  );
}

const ShowCase = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  row-gap: 5rem;
  column-gap: 1.125rem;
`;
