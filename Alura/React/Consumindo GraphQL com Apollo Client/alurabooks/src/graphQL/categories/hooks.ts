import { categoriesVar } from './state';
import { GET_CATEGORIES } from './queries';
import { useQuery } from '@apollo/client';
import Category from 'types/Category';

export function useCategoriesQuery() {
  const { data, loading, error } = useQuery<{ categorias: Category[] }>(GET_CATEGORIES, {
    onCompleted(data) {
      if (data.categorias) {
        categoriesVar({ data: data.categorias, loading: false, error: undefined });
      }
    },
  });
  if (!data?.categorias) categoriesVar({ data: [], loading, error });
}
