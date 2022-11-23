import { colors } from '../UI/variables';
import React from 'react';
import styled, { css } from 'styled-components';
import ChildrenInterface from '../../interfaces/ChildrenInterface';

export interface ButtonProps extends ChildrenInterface {
  text?: string;
  variantType?: 'Primary' | 'Secondary';
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props: ButtonProps) =>
    props.variantType === 'Primary' ? colors.mostarda : colors.branca};
  border: 0.125rem solid ${colors.mostarda};
  color: ${(props: ButtonProps) =>
    props.variantType === 'Primary' ? colors.branca : colors.mostarda};
  cursor: pointer;
  font-size: 1.25rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  ${(props: ButtonProps) =>
    props.variantType === 'Primary'
      ? css`
          &:hover {
            background-color: ${colors.mostardaEscura};
            border: 0.125rem solid ${colors.mostardaEscura};
          }
        `
      : css`
          &:hover {
            border: 0.125rem solid ${colors.mostardaEscura};
            color: ${colors.mostardaEscura};
          }
        `}
`;

export const AbButton = ({
  text,
  onClick,
  variantType = 'Primary',
  children,
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} variantType={variantType}>
      {text || children}
    </StyledButton>
  );
};
