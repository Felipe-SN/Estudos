import { colors } from '../UI/variables';
import { priceFormatter } from 'helpers/formatters';
import { useState } from 'react';
import styled, { css } from 'styled-components';

export default function AbOptionGroup({ defaultValue, onChange, options }: OptionGroupProps) {
  const [optionSelected, setOptionSelected] = useState<Option | null>(defaultValue ?? null);

  const onOptionSelected = (option: Option): void => {
    setOptionSelected(option);
    if (onChange) onChange(option);
  };

  return (
    <OptionsList>
      {options?.map(option => (
        <OptionItem
          key={option.id}
          $selectedID={optionSelected?.id === option.id}
          onClick={() => {
            onOptionSelected(option);
          }}
        >
          <header>{option.titulo}</header>
          <div>{priceFormatter(option.preco)}</div>
          <footer>{option.formatos?.join(', ')}</footer>
        </OptionItem>
      ))}
    </OptionsList>
  );
}

const OptionsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, max(12.125rem));
  column-gap: 1.5rem;
`;

const OptionItem = styled.li<{ $selectedID: boolean }>`
  ${props =>
    props.$selectedID
      ? css`
          border: none;
        `
      : css`
          border: 0.063rem solid ${colors.mostarda};
        `};
  background: ${props => (props.$selectedID ? colors.gradienteAzul : colors.branca)};
  border-radius: 0.5rem;
  box-sizing: border-box;
  cursor: pointer;
  display: grid;
  font-family: inherit;
  gap: 0.5rem;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, auto);
  max-width: 12.125rem;
  padding: 0.5rem;
  place-items: center;

  & header {
    color: ${props => (props.$selectedID ? colors.branca : colors.mostarda)};
    font-size: 0.75rem;
  }

  & div {
    color: ${props => (props.$selectedID ? colors.branca : colors.mostarda)};
    font-size: 1rem;
    font-weight: 700;
  }

  & footer {
    color: ${props => (props.$selectedID ? colors.branca : colors.cinzaTransparente)};
    font-size: 0.75rem;
  }
`;

type Option = {
  id: number;
  titulo: string;
  preco: number;
  formatos?: string[];
};

export interface OptionGroupProps {
  options?: Option[];
  defaultValue?: Option | null;
  onChange?: (option: Option) => void;
}
