import { useQuery } from '@tanstack/react-query';
import { get } from 'Services/apiServices';
import { AxiosError } from 'axios';
import Category from 'types/Category';

export default function useCategoryQueryBySlug(slug: string) {
  const { data, error, isLoading } = useQuery<Category | null, AxiosError>(
    ['getCategoryBySlug', slug],
    <T>() => <T>get('categorias', { params: { slug: slug } })
  );

  if (data) return { data, error, isLoading };

  return { data: null, error, isLoading };
}
