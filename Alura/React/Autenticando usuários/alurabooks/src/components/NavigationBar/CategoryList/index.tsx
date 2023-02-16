import { colors } from 'components/UI/variables';
import categories from 'data/categoriasNavMenu.json';
import useNavBarMenusState from 'state/hooks/useNavBarMenusState';
import styled, { css } from 'styled-components';

const CategoryMenu = styled.ul<{ isOpen?: boolean }>`
  background-color: ${colors.branca};
  position: absolute;
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

const CategoryList = () => {
  const { categoryListOpen } = useNavBarMenusState();
  return (
    <CategoryMenu isOpen={categoryListOpen}>
      {categories.map(category => (
        <li key={category.name}>
          <p>{category.name}</p>
        </li>
      ))}
    </CategoryMenu>
  );
};

export default CategoryList;
