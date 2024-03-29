import Banner from 'components/Banner';
import { colors } from 'components/UI/variables';
import { NavLink, Outlet } from 'react-router-dom';
import useProfileAreaTitleState from 'state/hooks/useProfileAreaTitleState';
import styled from 'styled-components';

const MenuArea = styled.section`
  column-gap: 4.75rem;
  display: grid;
  grid-template-columns: min-content 3fr;
  height: 48.75rem;
  padding-bottom: 5.125rem;
  padding-left: 7.5rem;
  padding-right: 7.5rem;
  padding-top: 8.375rem;
`;

const NavMenu = styled.nav`
  display: grid;
  justify-items: center;

  > ul {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

const CustomLink = styled(NavLink)`
  align-items: center;
  border-bottom-color: ${colors.cinzaBordaLista};
  border-bottom-style: solid;
  border-bottom-width: 0.063rem;
  color: ${colors.azul};
  display: flex;
  height: 3.25rem;
  justify-content: center;
  text-decoration: none;
  width: 10rem;

  &.active {
    border-bottom-color: ${colors.azul};
    font-weight: 700;
  }
`;

const MenuTitle = styled.h3`
  color: ${colors.preto};
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.25rem;
  margin-bottom: 1.25rem;
`;

const ProfileArea = () => {
  const { profileAreaTitle, profileMenuTitle } = useProfileAreaTitleState();

  return (
    <>
      <Banner variantType="gradient" title={profileAreaTitle} />
      <MenuArea>
        <NavMenu>
          <ul>
            <li>
              <CustomLink to={'pedidos'}>Pedidos</CustomLink>
            </li>
            <li>
              <CustomLink to={'trocas'}>Trocas</CustomLink>
            </li>
            <li>
              <CustomLink to={'cupons'}>Cupons</CustomLink>
            </li>
            <li>
              <CustomLink to={'detalhes'}>Seus dados</CustomLink>
            </li>
          </ul>
        </NavMenu>
        <section>
          <MenuTitle>{profileMenuTitle}</MenuTitle>
          <Outlet />
        </section>
      </MenuArea>
    </>
  );
};

export default ProfileArea;
