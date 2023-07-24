import { makeVar } from '@apollo/client';
import Book from 'types/Book';
import Category from 'types/Category';

export const bookFilterVar = makeVar<BookFilter>({});

export const booksVar = makeVar<Book[]>([]);

export const highlightsVar = makeVar<{ lancamentos: Book[]; maisVendidos: Book[] }>({
  lancamentos: [],
  maisVendidos: [],
});

interface BookFilter {
  titulo?: string;
  categoria?: Category;
}
