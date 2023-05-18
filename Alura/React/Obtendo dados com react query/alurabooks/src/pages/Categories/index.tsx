import { colors } from 'components/UI/variables';
import { getCategoryBySlug } from 'Services/apiServices';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Banner from 'components/Banner';
import BookList from 'components/BookList';
import Loader from 'components/Loader';
import styled from 'styled-components';

export default function Categories() {
  const { slug = '' } = useParams();
  const { data: category, isLoading } = useQuery(['categoryBySlug', slug], () => getCategoryBySlug(slug));

  return (
    <CategorySection>
      <Banner title={category?.nome} variantType="gradient" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BookSection>
            {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
            <BookList category={category!} />
          </BookSection>
        </>
      )}
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
