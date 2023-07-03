import { colors } from 'components/UI/variables';
import { useParams } from 'react-router-dom';
import Banner from 'components/Banner';
import BookList from 'components/BookList';
import Loader from 'components/Loader';
import NotFound from 'pages/NotFound';
import styled from 'styled-components';
import useCategoryQueryBySlug from 'state/reactQuery/hooks/useCategoryQueryBySlug';

export default function Categories() {
  const { slug = '' } = useParams();
  const { data: category, error, isLoading } = useCategoryQueryBySlug(slug);

  if (error) return <NotFound text={error.message} />;

  if (isLoading) return <Loader />;

  if (category === null) return <NotFound text="Categoria não encontrada!" />;

  return (
    <CategorySection>
      <Banner title={category?.nome} variantType="gradient" />
      <BookSection>
        <BookList category={category} />
      </BookSection>
    </CategorySection>
  );
}

const CategorySection = styled.section`
  align-items: center;
  background-color: ${colors.branca};
  display: flex;
  flex-direction: column;
`;

const BookSection = styled.section`
  display: grid;
  padding-bottom: 12rem;
  padding-top: 6rem;
`;
