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
    <SectionTags>
      {isLogged ? (
        <>
          <h2>TÓPICOS VISITADOS RECENTEMENTE</h2>
          {error && <h2>{error.message || 'Ops aconteceu um erro inesperado!'}</h2>}
          <TagList tags={tags} />
        </>
      ) : (
        <SingUp />
      )}
    </SectionTags>
  );
}

const SectionTags = styled.section`
  display: grid;
  background: ${colors.gradienteAzul};
  padding: 1.5rem 1rem;

  & > h2 {
    color: ${colors.branca};
    font-weight: 300;
    justify-self: center;
    margin-bottom: 2rem;
  }

  & > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    justify-self: center;

    & > li > a {
      font-size: 0.875rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    padding-top: 4rem;
    padding-bottom: 4.625rem;

    & > h2 {
      font-size: 2rem;
      margin-bottom: 2.5rem;
    }

    & > ul {
      gap: 1.5rem;
      max-width: 60vw;

      & > li > a {
        font-size: 1.5rem;
        padding: 1.5rem 2rem;
      }
    }
  }
`;
