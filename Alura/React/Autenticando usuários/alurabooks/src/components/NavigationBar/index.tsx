import { colors, fonts } from 'components/UI/variables';
import { useState } from 'react';
import categories from 'data/categoriasNavMenu.json';
import icons from 'data/icons.json';
import styled, { css } from 'styled-components';
import useIsLoggedState from 'state/hooks/useIsLoggedState';
import useModalOpenState from 'state/hooks/useModalOpenState';
import { Link } from 'react-router-dom';

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

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const PageTitle = styled.h1`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    font-family: ${fonts.josefin};
    font-size: 1.875rem;
    margin-right: 2.5rem;

    & > strong {
      font-weight: 700;
    }
  }
`;

const NavBarDeskOptions = styled.ul`
  display: none;

  @media screen and (min-width: 1024px) {
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
  column-gap: 4rem;
  justify-content: flex-end;

  ${props => {
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
`;

const IconButtons = styled.button<{ isLogged?: boolean }>`
  align-items: center;
  background-color: transparent;
  border-radius: 1.5rem;
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
      ${props =>
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

  &.deskHide {
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  &.userIcon {
    position: relative;
  }
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const UserMenuOptions = styled.ul`
  background-color: ${colors.branca};
  position: absolute;
  top: 3.5rem;
  transition-duration: 500ms;
  transition-property: visibility, opacity;
  width: max-content;

  > li {
    background: ${colors.gradienteAzul};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    text-decoration: none;

    &:hover {
      background: ${colors.gradienteAzul};
      -webkit-text-fill-color: ${colors.branca};
      color: ${colors.branca};
    }
  }
`;

interface MenuStateProps {
  isOpen?: boolean;
  isLogged?: boolean;
}

const NavigationBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [userMenuIsOpen, setUserMenuIsOpen] = useState<boolean>(false);
  const { isLogged } = useIsLoggedState();
  const { setModalIsOpen, setModalSingInIsOpen } = useModalOpenState();

  const handleUserIconClick = (): void => {
    if (isLogged) return setUserMenuIsOpen(!userMenuIsOpen);

    setModalSingInIsOpen(true);
    setModalIsOpen(true);
  };

  const handleMenusInteractions = (toggle?: boolean): void => {
    if (toggle) return setMenuIsOpen(!menuIsOpen);
    setMenuIsOpen(false);
  };

  return (
    <StyledNavBar>
      <LeftWrapper>
        <HamburgerButton
          aria-label="Menu"
          aria-expanded={menuIsOpen}
          aria-controls={CategoryList}
          onClick={() => handleMenusInteractions(true)}
        />
        <Link to={'/'}>
          <img alt="Logo da AluraBooks" src={icons.logo} />
        </Link>
        <PageTitle>
          <strong>Alura</strong>Books
        </PageTitle>
        <div>
          <NavBarDeskOptions>
            <li>
              <button
                aria-expanded={menuIsOpen}
                aria-controls={CategoryList}
                onClick={() => handleMenusInteractions(true)}
                onBlur={() => handleMenusInteractions()}
              >
                CATEGORIAS
              </button>
            </li>
            {isLogged && (
              <>
                <li>
                  <CustomLink to={'#'}>FAVORITOS</CustomLink>
                </li>
                <li>
                  <CustomLink to={'#'}>MINHA ESTANTE</CustomLink>
                </li>
              </>
            )}
          </NavBarDeskOptions>
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
            <IconButtons as={CustomLink} className="deskHide" to={'#'}>
              <img alt="Meus favoritos" src={icons.favoritos} />
            </IconButtons>
            <IconButtons as={CustomLink} isLogged={isLogged} to={'#'}>
              <img alt="Carrinho de compras" src={icons.sacola} />
              <p>Minha sacola</p>
            </IconButtons>
          </>
        )}
        <IconButtons
          aria-controls={UserMenuOptions}
          aria-expanded={userMenuIsOpen}
          className="userIcon"
          isLogged={isLogged}
          onClick={() => handleUserIconClick()}
        >
          <img alt="Meu perfil" src={icons.user} />
          <p>{isLogged ? 'Meu perfil' : 'Login'}</p>
          {userMenuIsOpen && (
            <UserMenuOptions>
              <li>Minha conta</li>
              <li>Meus pedidos</li>
              <li>Preferências</li>
              <li>Logout</li>
            </UserMenuOptions>
          )}
        </IconButtons>
      </RightWrapper>
    </StyledNavBar>
  );
};

export default NavigationBar;
