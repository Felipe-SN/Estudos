import { colors } from 'components/UI/variables';
import { useEffect, useState } from 'react';
import apiService from 'Services/apiService';
import SingUp from './SingUp';
import styled from 'styled-components';
import useIsLoggedState from 'state/hooks/useIsLoggedState';
import sortByLength from 'helpers/sortByLength';

export default function TagSection() {
  const [tags, setTags] = useState<TagProps[]>([]);
  const { isLogged } = useIsLoggedState();

  useEffect(() => {
    if (isLogged) requestCalls.get<TagProps[]>('tags').then(res => setTags(sortByLength(res, 'name')));
  }, [isLogged]);

  return (
    <StyledSection>
      {isLogged ? (
        <>
          <h2>CATEGORIAS MAIS BUSCADAS</h2>
          <ul>
            {tags?.map(tag => (
              <li key={tag.name}>
                <StyledTag href="#!">{tag.name}</StyledTag>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <SingUp />
      )}
    </StyledSection>
  );
}

const { requestCalls } = apiService();

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

type TagProps = { id: number; name: string };
