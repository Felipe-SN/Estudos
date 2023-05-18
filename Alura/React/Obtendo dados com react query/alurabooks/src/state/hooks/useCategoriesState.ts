import { useQuery } from '@tanstack/react-query';
import { get } from 'Services/apiServices';
import Category from 'types/Category';

export default function useCategoriesState() {
  const { data: categories } = useQuery(['categoriesFetch'], ({ signal }) => get<Category[]>('categorias', { signal }));
  return { categories };
}
