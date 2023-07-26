import { bookDetailsVar, bookFilterVar, booksVar, highlightsVar } from './state';
import { GET_BOOKS_BY_CAT_ID, GET_BOOKS_BY_SLUG, GET_BOOKS_HIGHLIGHTS } from './queries';
import { useQuery, useReactiveVar } from '@apollo/client';
import Book from 'types/Book';

export function useBooksQueryByCategoryID() {
  const filter = useReactiveVar(bookFilterVar);
  return useQuery<{ livros: Book[] }>(GET_BOOKS_BY_CAT_ID, {
    variables: { catId: filter.categoria?.id, title: filter.titulo },
    onCompleted(data) {
      if (data.livros) {
        booksVar(data.livros);
      }
    },
  });
}

export function useBookQueryBySlug(slug: string) {
  return useQuery<{ livro: Book }>(GET_BOOKS_BY_SLUG, {
    variables: { slug: slug },
    onCompleted(data) {
      if (data.livro) {
        bookDetailsVar(data.livro);
      }
    },
  });
}

export function useHighlightsQuery() {
  return useQuery<{ destaques: { lancamentos: Book[]; maisVendidos: Book[] } }>(GET_BOOKS_HIGHLIGHTS, {
    onCompleted(data) {
      if (data.destaques) {
        highlightsVar(data.destaques);
      }
    },
  });
}
