import { categoriesVar } from 'graphQL/categories/state';
import { useParams } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import Banner from 'components/Banner';
import BookList from 'components/BookList';
import Loader from 'components/Loader';
import NotFound from 'pages/NotFound';

export default function Categories() {
  const { slug = '' } = useParams();
  const { data: categories, error, loading } = useReactiveVar(categoriesVar);
  const category = categories.find(cat => cat.slug === slug) || null;

  if (error) return <NotFound text={error.message} />;

  if (loading) return <Loader />;

  if (category === null) return <NotFound text="Categoria não encontrada!" />;

  return (
    <>
      <Banner title={category?.nome} $variantType="gradient" />
      <BookList category={category} />
    </>
  );
}
