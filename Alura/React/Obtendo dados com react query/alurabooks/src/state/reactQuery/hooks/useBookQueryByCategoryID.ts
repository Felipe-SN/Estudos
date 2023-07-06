import { AxiosError } from 'axios';
import { getAll } from 'Services/apiServices';
import { useQuery } from '@tanstack/react-query';
import Book from 'types/Book';
import Category from 'types/Category';

export default function useBookQueryByCategoryID(category: Category) {
  const { data, error, isLoading } = useQuery<Book[] | null, AxiosError>(
    ['BookBySlug', category],
    <T>() => getAll<T>('livros', { params: { categoria: category.id } }),
    { enabled: !!category }
  );

  if (data) return { data, error, isLoading };

  return { data: null, error, isLoading };
}
