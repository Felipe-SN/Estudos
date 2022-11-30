import React from 'react';
import styled from 'styled-components';
import ChildrenInterface from '../../interfaces/ChildrenInterface';
import { colors, fonts } from '../UI/variables';

const StyledCard = styled.div`
  background-color: ${colors.branca};
  border-radius: 0.625rem;
  box-shadow: 0rem 0.25rem 0.25rem ${colors.sombra};
  box-sizing: border-box;
  display: grid;
  font-family: ${fonts.ArialSansSerif};
  max-height: 17.5rem;
  max-width: 23.75rem;
  padding: 1rem;
  place-items: center;
`;

export const AbCard = ({ children }: ChildrenInterface) => (
  <StyledCard>{children}</StyledCard>
);
