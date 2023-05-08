import { colors } from 'components/UI/variables';
import { getCategoryBySlug } from 'Services/apiServices';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Banner from 'components/Banner';
import Loader from 'components/Loader';
import styled from 'styled-components';

export default function Categories() {
  const { slug = '' } = useParams();

  const { data: category, isLoading } = useQuery(['categoryBySlug', slug], () => getCategoryBySlug(slug));

  if (isLoading) return <Loader />;

  return (
    <CategorySection>
      <Banner title={category?.nome} variantType="gradient" />
      <BookSection>
        <Test>Books Here!</Test>
      </BookSection>
    </CategorySection>
  );
}

const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookSection = styled.div`
  display: grid;
`;

const Test = styled.h2`
  font-size: 5rem;
  color: ${colors.azul};
`;
