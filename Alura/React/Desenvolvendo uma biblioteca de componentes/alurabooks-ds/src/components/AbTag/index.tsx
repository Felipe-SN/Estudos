import React from 'react';
import styled from 'styled-components';
import ChildrenInterface from '../../interfaces/ChildrenInterface';
import { colors, fonts } from '../UI/variables';

export interface AbTagProps extends ChildrenInterface {
  text?: string;
}

const StyledTag = styled.div`
  background-color: ${colors.mostarda};
  color: ${colors.branca};
  display: flex;
  font-family: ${fonts.ArialSansSerif};
  font-size: 1.5rem;
  font-weight: 700;
  padding-bottom: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.5rem;
  place-items: center;
  width: fit-content;
`;

export const AbTag = ({ text, children }: AbTagProps) => {
  return <StyledTag>{text || children}</StyledTag>;
};
