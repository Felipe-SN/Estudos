import { colors } from '../UI/variables';
import { priceFormatter } from 'helpers/formatters';
import { useState } from 'react';
import styled from 'styled-components';

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
          }}>
          <header>{option.titulo}</header>
          <div>{priceFormatter(option.preco)}</div>
          <footer>{option.formatos?.join(', ')}</footer>
        </OptionItem>
      ))}
    </OptionsList>
  );
}

const OptionsList = styled.ul`
  align-content: space-between;
  display: grid;
  grid-template-columns: repeat(3, minmax(7.5rem, 12.125rem));
`;

const OptionItem = styled.li<{ $selectedID: boolean }>`
  align-content: space-between;
  background: ${props => (props.$selectedID ? colors.gradienteAzul : colors.branca)};
  border-radius: 0.5rem;
  border: ${props => (props.$selectedID ? `none` : `0.063rem solid ${colors.mostarda}`)};
  cursor: pointer;
  display: grid;
  font-family: inherit;
  gap: 0.5rem;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, auto);
  max-width: 12.125rem;
  padding: 0.5rem;
  text-align: center;

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
