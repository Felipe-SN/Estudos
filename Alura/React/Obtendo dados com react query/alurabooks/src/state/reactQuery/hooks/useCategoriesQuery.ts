import { AxiosError } from 'axios';
import { getAll } from 'Services/apiServices';
import { useQuery } from '@tanstack/react-query';
import Category from 'types/Category';

export default function useCategoriesQuery() {
  return useQuery<Category[] | null, AxiosError>(['categoriesFetch'], ({ signal }) => getAll('categorias', { signal }));
}
