import { getBooksByCategory } from 'Services/apiServices';
import { useQuery } from '@tanstack/react-query';
import Category from 'types/Category';
import MiniCard from 'components/MiniCard';
import styled from 'styled-components';

export default function BookList({ category }: { category: Category }) {
  const { data: books } = useQuery(['BooksByCategory', category], () => getBooksByCategory(category));

  return (
    <ShowCase>
      {books?.map(book => (
        <li key={book.id}>
          <MiniCard {...book} />
        </li>
      ))}
    </ShowCase>
  );
}

const ShowCase = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  row-gap: 5rem;
  column-gap: 1.125rem;
`;
