import { AxiosError } from 'axios';
import { get } from 'Services/apiServices';
import { useQuery } from '@tanstack/react-query';
import Author from 'types/Author';
import Book from 'types/Book';

export default function useBookQueryBySlug(slug: string) {
  const {
    data: book,
    error,
    isLoading: bookLoading,
  } = useQuery<Book | null, AxiosError>(['BookBySlug', slug], <T>() => get<T>('livros', { params: { slug: slug } }));

  const { data: author, isLoading } = useQuery<Author | null, AxiosError>(
    ['authorByID', book],
    <T>() => get<T>('autores', { params: { id: book?.autor } }),
    {
      enabled: !!book,
    }
  );

  if (book) {
    const data = { ...book, autor: author };
    return { data, error, isLoading };
  }
  return { data: null, error, isLoading: bookLoading };
}
