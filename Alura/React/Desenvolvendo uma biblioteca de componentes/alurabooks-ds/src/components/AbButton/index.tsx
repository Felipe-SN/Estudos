import { colors } from '../UI/variables';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${colors.mostarda};
  border: 0.125rem solid ${colors.mostarda};
  color: ${colors.branca};
  cursor: pointer;
  font-size: 1.25rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  &:hover {
    background-color: ${colors.mostardaEscura};
    border: 0.125rem solid ${colors.mostardaEscura};
  }
`;

export const AbButton = () => {
  return <StyledButton>Clique Aqui!</StyledButton>;
};
