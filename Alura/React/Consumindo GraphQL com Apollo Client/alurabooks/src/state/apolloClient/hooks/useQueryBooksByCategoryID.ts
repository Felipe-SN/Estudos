import { gql, useQuery } from '@apollo/client';
import Book from 'types/Book';

export default function useQueryBooksByCategoryID(categoryID: number) {
  const GET_BOOKS_BY_CAT_ID = gql`
    query getAllBooks($catId: Int) {
      livros(categoriaId: $catId) {
        id
        titulo
        slug
        opcoesCompra {
          preco
          id
        }
        imagemCapa
      }
    }
  `;

  return useQuery<{ livros: Book[] }>(GET_BOOKS_BY_CAT_ID, { variables: { catId: categoryID } });
}
