import Author from './Author';
import PurchaseOptions from './PurchaseOptions';

type Book = {
  id: number;
  categoria: number;
  titulo: string;
  slug: string;
  descricao: string;
  isbn: string;
  numeroPaginas: number;
  publicacao: string;
  imagemCapa: string;
  autor: number | Author;
  opcoesCompra: PurchaseOptions[];
  sobre: string;
};

export default Book;
