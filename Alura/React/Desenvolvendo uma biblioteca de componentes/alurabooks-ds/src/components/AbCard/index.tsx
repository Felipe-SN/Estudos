import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from '../UI/variables';

interface CardProps {
  children?: ReactNode;
}

const StyledCard = styled.div`
  background-color: ${colors.branca};
  border-radius: 0.625rem;
  box-shadow: 0rem 0.25rem 0.25rem ${colors.sombra};
  box-sizing: border-box;
  display: grid;
  max-height: 17.5rem;
  max-width: 23.75rem;
  padding: 1rem;
  place-items: center;
`;

export const AbCard = ({ children }: CardProps) => (
  <StyledCard>
    {children || 'Não foi possível coletar as informações'}
  </StyledCard>
);
