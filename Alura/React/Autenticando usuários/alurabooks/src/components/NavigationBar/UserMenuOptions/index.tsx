import { colors, fonts } from 'components/UI/variables';
import sessionTokenHelper from 'helpers/sessionTokenHelper';
import { Link } from 'react-router-dom';
import { router } from 'Routes';
import useIsLoggedState from 'state/hooks/useIsLoggedState';
import useNavBarMenusState from 'state/hooks/useNavBarMenusState';
import styled from 'styled-components';

const UserMenu = styled.ul`
  background-color: ${colors.branca};
  max-width: 8.75rem;
  position: absolute;
  left: calc(100vw - 8.75rem);
  top: 5rem;
  transition-duration: 500ms;
  width: max-content;

  @media screen and (min-width: 1024px) {
    left: calc(100vw - 10.375rem);
  }

  @media screen and (min-width: 1728px) {
    left: auto;
  }

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
      justify-content: center;
      text-decoration: none;
      width: 8.75rem;
    }

    > button {
      border: none;
      cursor: pointer;
      font-family: ${fonts.poppins};
      font-size: 1rem;
    }

    &:hover {
      background: ${colors.gradienteAzul};
      > * {
        -webkit-text-fill-color: ${colors.branca};
        color: ${colors.branca};
      }
    }
  }
`;

const { token } = sessionTokenHelper();

const UserMenuOptions = () => {
  const { userMenuOpen } = useNavBarMenusState();
  const { setIsLogged } = useIsLoggedState();

  const onLogout = () => {
    token.remove();
    setIsLogged(false);
    router.navigate('/', { replace: true });
  };

  return (
    <>
      {userMenuOpen && (
        <UserMenu>
          <li>
            <Link to={'perfil/pedidos'}>Minha conta</Link>
          </li>
          <li>
            <Link to={'perfil/pedidos'}>Meus pedidos</Link>
          </li>
          <li>
            <Link to={'#'}>Preferências</Link>
          </li>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </UserMenu>
      )}
    </>
  );
};

export default UserMenuOptions;
