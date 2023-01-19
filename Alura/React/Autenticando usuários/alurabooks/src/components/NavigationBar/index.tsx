import { colors, fonts } from 'components/UI/variables';
import { useState } from 'react';
import categories from 'data/categoriasNavMenu.json';
import icons from 'data/icons.json';
import styled, { css } from 'styled-components';
import useIsLoggedState from 'state/hooks/useIsLoggedState';
import useModalOpenState from 'state/hooks/useModalOpenState';

const StyledNavBar = styled.nav`
  background-color: ${colors.branca};
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto;
  height: 5rem;
  max-height: 5rem;
  padding-right: 2rem;
  position: relative;
  width: 100vw;

  @media screen and (min-width: 1024px) {
    padding-left: 5rem;
    padding-right: 5rem;
    position: sticky;
  }
`;

const LeftWrapper = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-rows: auto;
`;

const HamburgerButton = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 0;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 5rem;
  justify-content: center;
  width: 5rem;

  ::before {
    content: url(${icons.menu});
    height: 1.5rem;
    width: 2.25rem;
  }

  &[aria-expanded='true'] {
    background: ${colors.gradienteAzul};

    &::before {
      filter: saturate(0) brightness(100);
    }
  }
`;

const PageTitle = styled.h1`
  font-family: ${fonts.josefin};
  font-size: 1.875rem;
  margin-right: 2.5rem;

  & > b {
    font-weight: 700;
  }
`;

const NavBarDeskOptions = styled.ul<MenuStateProps>`
  display: grid;
  align-items: center;
  column-gap: 1.375rem;
  grid-template-columns: repeat(3, max-content);

  > li > * {
    background-color: transparent;
    font-size: 1rem;
    color: ${colors.preto};
    padding: 0.625rem;
    border: none;
    text-decoration: none;

    &:hover {
      background: ${colors.gradienteAzul};
      color: ${colors.branca};
    }
    &:focus {
      outline: none;
    }
  }

  li > button {
    cursor: pointer;
    position: relative;
    &:focus {
      background: ${colors.gradienteAzul};
      color: ${colors.branca};
    }
  }
`;

const CategoryList = styled.ul<MenuStateProps>`
  background-color: ${colors.branca};
  left: 0;
  position: absolute;
  top: 5rem;
  width: 65vw;
  transition-property: visibility, opacity;
  transition-duration: 500ms;

  ${(props: MenuStateProps) =>
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
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;

    > * {
      background: ${colors.gradienteAzul};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      text-decoration: none;
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

const RightWrapper = styled(LeftWrapper)<MenuStateProps>`
  column-gap: 1.875rem;
  justify-content: flex-end;

  ${(props: MenuStateProps) => {
    if (props.isLogged)
      return css`
        @media screen and (min-width: 1024px) {
          grid-template-columns: repeat(2, max-content);
        }
      `;

    return css`
      grid-template-columns: max-content;
    `;
  }}

  & > {
    button {
      align-items: center;
      background-color: transparent;
      border-radius: 50%;
      border: none;
      box-sizing: border-box;
      column-gap: 0.5rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      padding: 0;

      > p {
        display: none;
        font-size: 1.25rem;

        @media screen and (min-width: 1024px) {
          ${(props: MenuStateProps) =>
            props.isLogged
              ? css`
                  display: none;
                `
              : css`
                  display: block;
                `}
        }

        @media screen and (min-width: 1728px) {
          display: block;
        }
      }
    }
  }
`;

interface MenuStateProps {
  isOpen?: boolean;
  isLogged?: boolean;
}

const NavigationBar = () => {
  const [windowSize, setWindowSize] = useState<number>(window.screen.width);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const { isLogged } = useIsLoggedState();
  const { setModalIsOpen } = useModalOpenState();

  window.addEventListener('resize', () => {
    setMenuIsOpen(false);
    setWindowSize(window.screen.width);
  });

  const singInUser = (): void => {
    setModalIsOpen(true);
  };

  const handleClickOnMenus = (): void => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
      return;
    }
    setMenuIsOpen(true);
  };

  return (
    <StyledNavBar>
      <LeftWrapper>
        {windowSize < 1024 && (
          <HamburgerButton
            aria-label="Menu"
            aria-expanded={menuIsOpen}
            aria-controls={CategoryList}
            onClick={() => handleClickOnMenus()}
          />
        )}
        <img alt="Logo da AluraBooks" src={icons.logo} />
        {windowSize >= 1024 && (
          <PageTitle>
            <b>Alura</b>Books
          </PageTitle>
        )}
        <div>
          {windowSize >= 1024 && (
            <NavBarDeskOptions>
              <li>
                <button
                  aria-expanded={menuIsOpen}
                  aria-controls={CategoryList}
                  onClick={() => handleClickOnMenus()}
                >
                  CATEGORIAS
                </button>
              </li>
              {isLogged && (
                <>
                  <li>
                    <a href="#!">FAVORITOS</a>
                  </li>
                  <li>
                    <a href="#!">MINHA ESTANTE</a>
                  </li>
                </>
              )}
            </NavBarDeskOptions>
          )}
          <CategoryList isOpen={menuIsOpen}>
            {categories.map(category => (
              <li key={category.name}>
                <p>{category.name}</p>
              </li>
            ))}
          </CategoryList>
        </div>
      </LeftWrapper>
      <RightWrapper isLogged={isLogged}>
        {isLogged && (
          <>
            {isLogged && windowSize < 1024 && (
              <button>
                <img alt="Meus favoritos" src={icons.favoritos} />
              </button>
            )}
            <button>
              <img alt="Carrinho de compras" src={icons.sacola} />
              <p>Minha sacola</p>
            </button>
          </>
        )}
        <button onClick={() => singInUser()}>
          <img alt="Meu perfil" src={icons.user} />
          <p>{isLogged ? 'Meu perfil' : 'Login'}</p>
        </button>
      </RightWrapper>
    </StyledNavBar>
  );
};

export default NavigationBar;
