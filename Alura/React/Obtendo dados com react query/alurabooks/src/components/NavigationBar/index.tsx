import { colors, fonts } from 'components/UI/variables';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import icons from 'data/icons.json';
import styled, { css } from 'styled-components';
import useIsLoggedState from 'state/hooks/useIsLoggedState';
import useModalOpenState from 'state/hooks/useModalOpenState';
import useNavBarMenusState from 'state/hooks/useNavBarMenusState';
import UserMenuOptions from './UserMenuOptions';

export default function NavigationBar() {
  const { categoryListOpen, setCategoryListOpen, userMenuOpen, setUserMenuOpen } = useNavBarMenusState();
  const { isLogged } = useIsLoggedState();
  const { setModalIsOpen, setModalSingInIsOpen } = useModalOpenState();

  const handleUserIconInteractions = (toggle?: boolean): void => {
    if (isLogged) {
      if (toggle) return setUserMenuOpen(!userMenuOpen);
      setTimeout(() => {
        setUserMenuOpen(false);
      }, 300);
      return;
    }
    setModalSingInIsOpen(true);
    setModalIsOpen(true);
  };

  const handleMenusCategoryInteractions = (toggle?: boolean): void => {
    if (toggle) return setCategoryListOpen(!categoryListOpen);
    setCategoryListOpen(false);
  };

  return (
    <StyledNavBar>
      <LeftWrapper>
        <HamburgerButton aria-label="Menu" onClick={() => handleMenusCategoryInteractions(true)} />
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
                onClick={() => handleMenusCategoryInteractions(true)}
                onBlur={() => handleMenusCategoryInteractions()}
                type="button"
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
          <CategoryList />
        </div>
      </LeftWrapper>
      <RightWrapper isLogged={isLogged}>
        {isLogged && (
          <>
            <IconButtons as={CustomLink} className="deskHide" to={'#'}>
              <img alt="Meus favoritos" src={icons.favoritos} />
            </IconButtons>
            <IconButtons as={CustomLink} to={'#'}>
              <img alt="Carrinho de compras" src={icons.sacola} />
              <p className="midDeskHide">Minha sacola</p>
            </IconButtons>
          </>
        )}
        <div>
          <IconButtons
            aria-expanded={userMenuOpen}
            className="userIcon"
            isLogged={isLogged}
            onBlur={() => handleUserIconInteractions()}
            onClick={() => handleUserIconInteractions(true)}
          >
            <img alt="Meu perfil" src={icons.user} />
            <p>{isLogged ? 'Meu perfil' : 'Login'}</p>
          </IconButtons>
          <UserMenuOptions />
        </div>
      </RightWrapper>
    </StyledNavBar>
  );
}

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
    border: none;
    cursor: pointer;
    font-family: ${fonts.poppins};
    font-size: 1rem;

    position: relative;
    &:focus {
      background: ${colors.gradienteAzul};
      color: ${colors.branca};
    }
  }
`;

const RightWrapper = styled(LeftWrapper)<MenuStateProps>`
  column-gap: 1.875rem;
  justify-content: flex-end;

  @media screen and (min-width: 1024px) {
    column-gap: 4rem;
  }

  ${props =>
    props.isLogged
      ? css`
          @media screen and (min-width: 1024px) {
            grid-template-columns: repeat(2, max-content);
          }
        `
      : css`
          grid-template-columns: max-content;
        `}
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

    @media screen and (min-width: 1728px) {
      display: block;
    }
  }

  &.userIcon {
    position: relative;

    > p {
      @media screen and (min-width: 1024px) {
        ${props =>
          props.isLogged
            ? css`
                display: none;
              `
            : css`
                display: block;
              `}

        @media screen and (min-width: 1728px) {
          display: block;
        }
      }
    }
  }
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

type MenuStateProps = {
  isOpen?: boolean;
  isLogged?: boolean;
};
