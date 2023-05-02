import apiService from 'Services/apiService';
import { colors } from 'components/UI/variables';
import { useEffect, useState } from 'react';
import useNavBarMenusState from 'state/hooks/useNavBarMenusState';
import styled, { css } from 'styled-components';

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const { categoryListOpen } = useNavBarMenusState();

  useEffect(() => {
    requestCalls.get<Category[]>('categorias').then(res => setCategories(res));
  }, []);

  return (
    <CategoryMenu isOpen={categoryListOpen}>
      {categories?.map(category => (
        <li key={category.id}>
          <p>{category.nome}</p>
        </li>
      ))}
    </CategoryMenu>
  );
}

const { requestCalls } = apiService();

const CategoryMenu = styled.ul<{ isOpen?: boolean }>`
  background-color: ${colors.branca};
  position: absolute;
  left: 0;
  top: 5rem;
  transition-duration: 500ms;
  transition-property: visibility, opacity;
  width: 65vw;

  ${props =>
    props.isOpen
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
        `}

  > li {
    > * {
      background: ${colors.gradienteAzul};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      align-items: center;
      background-clip: text;
      color: transparent;
      display: flex;
      height: 3.5rem;
      padding-left: 1.5rem;
      text-decoration: none;
      width: 11.25rem;
    }

    &:hover {
      background: ${colors.gradienteAzul};
      > * {
        -webkit-text-fill-color: ${colors.branca};
        color: ${colors.branca};
      }
    }
  }

  @media screen and (min-width: 1024px) {
    left: auto;
    top: auto;
    width: max-content;
  }
`;

type Category = { id: number; nome: string; slug: string };
