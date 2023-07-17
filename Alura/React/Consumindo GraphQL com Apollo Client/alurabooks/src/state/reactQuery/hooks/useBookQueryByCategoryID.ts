import { AxiosError } from 'axios';
import { getAll } from 'Services/apiServices';
import { useQuery } from '@tanstack/react-query';
import Book from 'types/Book';
import Category from 'types/Category';

export default function useBookQueryByCategoryID(category: Category) {
  const booksInfo = useQuery<Book[] | null, AxiosError>(
    ['BookByCategoryID', category],
    <T>() => getAll<T>('livros', { params: { categoria: category.id } }),
    { enabled: !!category }
  );

  if (booksInfo.data) return { ...booksInfo };

  return { ...booksInfo, data: null };
}
