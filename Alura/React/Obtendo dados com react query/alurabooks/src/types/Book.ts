import Author from './Author';
import PurchaseOptions from './PurchaseOptions';

export type Book = BookFull | BookIDOnly;

export type BookIDOnly = {
  autor: number;
  categoria: number;
  descricao: string;
  id: number;
  imagemCapa: string;
  isbn: string;
  numeroPaginas: number;
  opcoesCompra: PurchaseOptions[];
  publicacao: string;
  slug: string;
  sobre: string;
  titulo: string;
};

export type BookFull = {
  autor: Author;
  categoria: number;
  descricao: string;
  id: number;
  imagemCapa: string;
  isbn: string;
  numeroPaginas: number;
  opcoesCompra: PurchaseOptions[];
  publicacao: string;
  slug: string;
  sobre: string;
  titulo: string;
};
