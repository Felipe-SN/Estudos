import { makeVar } from '@apollo/client';
import Book from 'types/Book';
import Category from 'types/Category';

export const bookFilterVar = makeVar<IBookFilter>({});

export const booksVar = makeVar<Book[]>([]);

export const bookDetailsVar = makeVar<Book>({
  autorId: 0,
  categoriaId: 0,
  descricao: '',
  id: 0,
  imagemCapa: '',
  isbn: '',
  numeroPaginas: 0,
  opcoesCompra: [],
  publicacao: '',
  slug: '',
  sobre: '',
  tagIds: [],
  titulo: '',
});

export const highlightsVar = makeVar<{ lancamentos: Book[]; maisVendidos: Book[] }>({
  lancamentos: [],
  maisVendidos: [],
});

interface IBookFilter {
  categoria?: Category;
  titulo?: string;
}
