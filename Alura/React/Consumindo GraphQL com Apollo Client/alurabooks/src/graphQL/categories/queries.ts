import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query getAllCategories {
    categorias {
      id
      nome
      slug
    }
  }
`;
