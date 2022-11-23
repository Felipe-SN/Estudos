import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../UI/variables';

const StyledSection = styled.section<{ selectedID: boolean }>`
  ${props =>
    props.selectedID
      ? css`
          border: none;
        `
      : css`
          border: 0.063rem solid ${colors.mostarda};
        `};
  background: ${props =>
    props.selectedID ? colors.gradienteAzul : colors.branca};
  border-radius: 0.5rem;
  box-sizing: border-box;
  cursor: pointer;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, auto);
  max-width: 12.125rem;
  padding: 0.5rem;
  place-items: center;

  header {
    color: ${props => (props.selectedID ? colors.branca : colors.mostarda)};
    font-size: 0.75rem;
  }

  div {
    color: ${props => (props.selectedID ? colors.branca : colors.mostarda)};
    font-size: 1rem;
    font-weight: 700;
  }

  footer {
    color: ${props =>
      props.selectedID ? colors.branca : colors.cinzaTransparente};
    font-size: 0.75rem;
  }
`;

export interface OptionItem {
  id: number;
  title: string;
  body: string;
  footer: string;
}

export interface OptionGroupProps {
  options: OptionItem[];
  defaultValue?: OptionItem | null;
  onChange?: (option: OptionItem) => void;
}

export const AbOptionGroup = ({
  defaultValue,
  onChange,
  options,
}: OptionGroupProps) => {
  const [selected, setSelected] = useState<OptionItem | null>(
    defaultValue ?? null
  );

  const onSelect = (option: OptionItem): void => {
    setSelected(option);
    if (onChange) onChange(option);
  };

  return (
    <>
      {options.map(option => (
        <StyledSection
          key={option.id}
          selectedID={selected?.id === option.id}
          onClick={() => {
            onSelect(option);
          }}
        >
          <header>{option.title}</header>
          <div>{option.body}</div>
          <footer>{option.footer}</footer>
        </StyledSection>
      ))}
    </>
  );
};
