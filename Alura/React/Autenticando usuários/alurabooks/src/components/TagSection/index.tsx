import { colors } from 'components/UI/variables';
import useIsLoggedState from 'state/hooks/useIsLoggedState';
import styled from 'styled-components';
import SingUp from './SingUp';

const StyledSection = styled.section`
  display: grid;
  background: ${colors.gradienteAzul};
  padding-top: 4rem;
  padding-bottom: 4.625rem;

  > h2 {
    justify-self: center;
    color: ${colors.branca};
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0rem;
    line-height: 3rem;
    margin-bottom: 2.5rem;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    justify-self: center;
    max-width: 49rem;
  }
`;

const StyledTag = styled.a`
  background-color: ${colors.mostarda};
  color: ${colors.branca};
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  padding-bottom: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.5rem;
  place-items: center;
  text-decoration: none;
  width: fit-content;
`;

type TagSectionProps = {
  categories: { name: string }[];
};

const TagSection = ({ categories }: TagSectionProps) => {
  const { isLogged } = useIsLoggedState();
  return (
    <StyledSection>
      {isLogged ? (
        <>
          <h2>CATEGORIAS MAIS BUSCADAS</h2>
          <ul>
            {categories.map(category => (
              <li key={category.name}>
                <StyledTag href="#!">{category.name}</StyledTag>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <SingUp />
      )}
    </StyledSection>
  );
};

export default TagSection;
