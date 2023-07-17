import { AxiosError } from 'axios';
import { get } from 'Services/apiServices';
import { useQuery } from '@tanstack/react-query';
import Author from 'types/Author';
import Book from 'types/Book';

export default function useBookQueryBySlug(slug: string) {
  const bookInfo = useQuery<Book | null, AxiosError>(['BookBySlug', slug], ({ signal }) =>
    get('livros', { params: { slug: slug }, signal })
  );

  const { data: author } = useQuery<Author | null, AxiosError>(
    ['authorByID', bookInfo.data],
    ({ signal }) => get('autores', { params: { id: bookInfo.data?.autorId }, signal }),
    {
      enabled: !!bookInfo.data,
    }
  );

  if (author) {
    const newData = { ...bookInfo.data, autor: author };
    return { ...bookInfo, data: newData };
  }

  return { ...bookInfo, data: null };
}
