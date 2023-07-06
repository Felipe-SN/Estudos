import { AxiosError } from 'axios';
import { getAll } from 'Services/apiServices';
import { useQuery } from '@tanstack/react-query';
import Author from 'types/Author';
import { Book, BookFull } from 'types/Book';
import { queryClient } from '../client';

export default function useBookQueryHighlights() {
  const { data: authors } = useQuery<Author[] | null, AxiosError>(['getAllAuthors'], ({ signal }) =>
    getAll('autores', { signal })
  );

  const { ...releasesInfo } = useQuery<BookFull[] | null, AxiosError>(
    ['getReleases'],
    <T>() => getAll<T>('/public/lancamentos'),
    {
      enabled: !!authors,
      onSuccess(data) {
        concatWithAuthors(data, 'getReleases');
      },
    }
  );

  const { ...bestSellersInfo } = useQuery<BookFull[] | null, AxiosError>(
    ['getBestSellers'],
    <T>() => getAll<T>('/public/mais-vendidos'),
    {
      enabled: !!authors,
      onSuccess(data) {
        concatWithAuthors(data, 'getBestSellers');
      },
    }
  );

  function concatWithAuthors(data: Book[] | null, queryKey: string) {
    const newValue =
      (data?.map(
        book =>
          authors && {
            ...book,
            autor: authors.find(author => author.id === book.autor) || hollowAuthor,
          }
      ) as BookFull[]) || null;
    if (newValue) queryClient.setQueryData([queryKey], [...newValue]);
  }

  return {
    releases: { ...releasesInfo },
    bestSellers: { ...bestSellersInfo },
  };
}

const hollowAuthor = { id: 0, nome: '', sobre: '' };
