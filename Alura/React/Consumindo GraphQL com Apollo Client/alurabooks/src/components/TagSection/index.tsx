import { colors } from 'components/UI/variables';
import SingUp from './SingUp';
import styled from 'styled-components';
import useIsLoggedState from 'state/recoil/hooks/useIsLoggedState';
import useTagsQuery from 'state/reactQuery/hooks/useTagsQuery';
import TagList from 'components/TagsList';

export default function TagSection() {
  const { data: tags, error } = useTagsQuery();
  const { isLogged } = useIsLoggedState();

  return (
    <StyledSection>
      {isLogged ? (
        <>
          <h2>CATEGORIAS MAIS BUSCADAS</h2>
          {error && <h2>{error.message || 'Ops aconteceu um erro inesperado!'}</h2>}
          <TagList tags={tags} />
        </>
      ) : (
        <SingUp />
      )}
    </StyledSection>
  );
}

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
    max-width: 40vw;
  }
`;
