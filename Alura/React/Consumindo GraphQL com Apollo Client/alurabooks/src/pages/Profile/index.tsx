import { colors } from 'components/UI/variables';
import { NavLink, useParams } from 'react-router-dom';
import Banner from 'components/Banner';
import styled from 'styled-components';
import TagSection from 'components/TagSection';
import NewsLetter from 'components/NewsLatter';
import NotFound from 'pages/NotFound';
import RequestsList from './RequestsList';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [UsedSlug, setUsedSlug] = useState<SlugSet>({ valid: false });
  const { slug = '' } = useParams();

  useEffect(() => {
    const validSlugs = [
      { slug: 'cupons', element: <NotFound /> },
      { slug: 'dados', element: <NotFound /> },
      { slug: 'pedidos', element: <RequestsList /> },
      { slug: 'trocas', element: <NotFound /> },
    ];

    for (const item of validSlugs) {
      if (item.slug === slug) setUsedSlug({ valid: true, element: item.element });
    }
  }, [slug]);

  return (
    <>
      <Banner $variantType="gradient" title="Meu Perfil" />
      <MenuArea>
        <NavMenu>
          <ul>
            <li>
              <NavLink to={'/perfil/pedidos'}>Pedidos</NavLink>
            </li>
            <li>
              <NavLink to={'/perfil/trocas'}>Trocas</NavLink>
            </li>
            <li>
              <NavLink to={'/perfil/cupons'}>Cupons</NavLink>
            </li>
            <li>
              <NavLink to={'/perfil/dados'}>Seus dados</NavLink>
            </li>
          </ul>
        </NavMenu>
        <div>
          {UsedSlug.valid ? (
            <>
              <MenuTitle>{slug}</MenuTitle>
              {UsedSlug.element}
            </>
          ) : (
            <NotFound text="O item de perfil solicitado é invalido!" />
          )}
        </div>
      </MenuArea>
      <TagSection />
      <NewsLetter />
    </>
  );
}

const MenuArea = styled.section`
  display: grid;
  padding: 5.4rem 1.5rem 5rem 1.5rem;

  @media screen and (min-width: 1024px) {
    column-gap: 4.75rem;
    grid-template-columns: min-content 3fr;
    height: 48.75rem;
    padding: 3rem 1.5rem 3rem 1.5rem;
  }

  @media screen and (min-width: 1728px) {
    padding: 8.375rem 7.5rem 5.125rem 7.5rem;
  }
`;

const NavMenu = styled.nav`
  display: grid;

  & > ul > li > a {
    align-items: center;
    border-bottom: 0.063rem solid ${colors.cinzaBordaLista};
    color: ${colors.azul};
    display: flex;
    height: 3.25rem;
    justify-content: center;
    text-decoration: none;

    @media screen and (min-width: 1024px) {
      width: 10rem;
    }

    &.active {
      border-bottom-color: ${colors.azul};
      font-weight: 700;
    }
  }
`;

const MenuTitle = styled.h3`
  color: ${colors.preto};
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1.7rem;
  margin-top: 1.5rem;
  text-transform: capitalize;

  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
    margin-top: 0;
  }
`;

type SlugSet = {
  valid: boolean;
  element?: JSX.Element;
};
