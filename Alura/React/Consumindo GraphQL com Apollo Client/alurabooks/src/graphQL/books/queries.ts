import { gql } from '@apollo/client';

export const GET_BOOKS_BY_CAT_ID = gql`
  query getBooksByCatId($catId: Int, $title: String) {
    livros(categoriaId: $catId, titulo: $title) {
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

export const GET_BOOKS_BY_SLUG = gql`
  query getBooksByCatId($catId: Int, $title: String) {
    livros(categoriaId: $catId, titulo: $title) {
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

export const GET_BOOKS_HIGHLIGHTS = gql`
  query getHighlights {
    destaques {
      lancamentos {
        id
        titulo
        imagemCapa
        descricao
        slug
        autor {
          id
          nome
          sobre
        }
        opcoesCompra {
          preco
        }
      }
      maisVendidos {
        id
        titulo
        imagemCapa
        descricao
        slug
        autor {
          id
          nome
          sobre
        }
        opcoesCompra {
          preco
        }
      }
    }
  }
`;
