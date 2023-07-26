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
  query getBooksBySlug($slug: String!) {
    livro(slug: $slug) {
      id
      titulo
      descricao
      imagemCapa
      sobre
      opcoesCompra {
        id
        titulo
        formatos
        preco
      }
      autor {
        nome
        sobre
      }
      tags {
        nome
      }
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
