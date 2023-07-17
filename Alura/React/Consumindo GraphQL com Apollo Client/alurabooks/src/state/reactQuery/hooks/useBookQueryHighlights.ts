import { AxiosError } from 'axios';
import { getAll } from 'Services/apiServices';
import { useQuery } from '@tanstack/react-query';
import Author from 'types/Author';
import Book from 'types/Book';

export default function useBookQueryHighlights() {
  const { data: authors } = useQuery<Author[] | null, AxiosError>(['getAllAuthors'], ({ signal }) =>
    getAll('autores', { signal })
  );

  const releasesInfo = useQuery<Book[] | null, AxiosError>(['getReleases'], <T>() => getAll<T>('/public/lancamentos'), {
    enabled: !!authors,
    select: data => concatWithAuthors(data),
  });

  const bestSellersInfo = useQuery<Book[] | null, AxiosError>(
    ['getBestSellers'],
    <T>() => getAll<T>('/public/mais-vendidos'),
    {
      enabled: !!authors,
      select: data => concatWithAuthors(data),
    }
  );

  function concatWithAuthors(data: Book[] | null) {
    if (data) {
      const newValue =
        data?.map(
          book => ({ ...book, autor: authors?.find(author => author.id === book.autorId) || hollowAuthor } as Book)
        ) || null;
      if (newValue) return newValue;
    }
    return null;
  }

  return {
    releases: { ...releasesInfo },
    bestSellers: { ...bestSellersInfo },
  };
}

const hollowAuthor = { id: 0, nome: '', sobre: '' };
