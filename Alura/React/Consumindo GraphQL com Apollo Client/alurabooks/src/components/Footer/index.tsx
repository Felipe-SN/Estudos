import { colors } from 'components/UI/variables';
import styled from 'styled-components';
import linkIcons from 'data/linkIcons.json';

export default function Footer() {
  return (
    <StyledFooter>
      <h2>Grupo Alura</h2>
      {linkIcons.map(category => (
        <StyledList key={category.categoryTitle}>
          <li key={category.id}>{category.categoryTitle}</li>
          {category.itens.map(item => (
            <li key={item.id}>
              <StyledLink href="#" $imgURL={item.imgURL}>
                {item.name}
              </StyledLink>
            </li>
          ))}
        </StyledList>
      ))}
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: ${colors.branca};
  border-top: 0.063rem solid ${colors.cinza};
  padding: 1rem 1.5rem 1.5rem 1.5rem;

  @media screen and (min-width: 1024px) {
    align-items: flex-start;
    display: grid;
    grid-template-columns: repeat(4, max-content);
    justify-content: center;
    padding-bottom: 3.5rem;
    padding-top: 3.5rem;

    > h2 {
      font-size: 1.5rem;
      margin-right: 6.5rem;
    }
  }

  @media screen and (min-width: 1728px) {
    align-items: flex-start;
    display: grid;
    grid-template-columns: repeat(4, max-content);

    > h2 {
      margin-right: 7.5rem;
    }
  }
`;

const StyledList = styled.ul`
  display: none;

  @media screen and (min-width: 1024px) {
    color: ${colors.cinza};
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    gap: 1rem;
    letter-spacing: 0rem;
    width: 11.8125rem;

    & > li {
      white-space: nowrap;

      &:first-child {
        margin-bottom: 0.5rem;
      }
    }

    &:not(:first-child) {
      &:not(:last-child) {
        margin-right: 3.8rem;
      }
    }
  }

  @media screen and (min-width: 1728px) {
    border-left: 0.063rem solid ${colors.cinza};
    height: 100%;
    padding-left: 1.25rem;

    &:not(:first-child) {
      &:not(:last-child) {
        margin-right: 11.75rem;
      }
    }
  }
`;

const StyledLink = styled.a<{ $imgURL: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: ${colors.cinzaEscuro};

  &::before {
    content: url(${props => props.$imgURL});
  }
`;
