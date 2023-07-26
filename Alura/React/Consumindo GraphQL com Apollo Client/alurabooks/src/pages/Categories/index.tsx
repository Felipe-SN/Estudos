import { categoriesVar } from 'graphQL/categories/state';
import { colors } from 'components/UI/variables';
import { useParams } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import Banner from 'components/Banner';
import BookList from 'components/BookList';
import Loader from 'components/Loader';
import NotFound from 'pages/NotFound';
import styled from 'styled-components';

export default function Categories() {
  const { slug = '' } = useParams();
  const { data: categories, error, loading } = useReactiveVar(categoriesVar);
  const category = categories.find(cat => cat.slug === slug) || null;

  if (error) return <NotFound text={error.message} />;

  if (loading) return <Loader />;

  if (category === null) return <NotFound text="Categoria não encontrada!" />;

  return (
    <CategorySection>
      <Banner title={category?.nome} $variantType="gradient" />
      <BooksArea>
        <BookList category={category} />
      </BooksArea>
    </CategorySection>
  );
}

const CategorySection = styled.section`
  align-items: center;
  background-color: ${colors.branca};
  display: flex;
  flex-direction: column;
`;

const BooksArea = styled.div`
  display: grid;
  padding-bottom: 12rem;
  padding-top: 6rem;
`;
