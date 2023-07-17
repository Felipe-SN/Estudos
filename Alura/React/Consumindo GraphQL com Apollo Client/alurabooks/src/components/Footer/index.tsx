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
  align-items: flex-start;
  background-color: ${colors.branca};
  border-top: 0.063rem solid ${colors.cinza};
  display: grid;
  grid-template-columns: repeat(4, max-content);
  justify-content: center;
  padding-bottom: 3.5rem;
  padding-top: 3.5rem;

  > h2 {
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-right: 7.625rem;
  }
`;

const StyledList = styled.ul`
  border-left: 0.063rem solid ${colors.cinza};
  box-sizing: border-box;
  color: ${colors.cinza};
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  gap: 1.5rem;
  height: 100%;
  letter-spacing: 0rem;
  line-height: 1.25rem;
  padding-left: 1.25rem;

  &:not(:last-child) {
    margin-right: 11.75rem;
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
