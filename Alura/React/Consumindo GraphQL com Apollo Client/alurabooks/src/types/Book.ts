import Author from './Author';
import PurchaseOptions from './PurchaseOptions';

type Book = {
  autor?: Author;
  autorId: number;
  categoriaId: number;
  descricao: string;
  id: number;
  imagemCapa: string;
  isbn: string;
  numeroPaginas: number;
  opcoesCompra: PurchaseOptions[];
  publicacao: string;
  slug: string;
  sobre: string;
  tagIds: number[];
  tags?: { id: number; nome: string }[];
  titulo: string;
};

export default Book;
