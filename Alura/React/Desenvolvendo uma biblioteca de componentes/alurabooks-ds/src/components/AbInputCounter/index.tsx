import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../UI/variables';

const StyledDiv = styled.div`
  display: grid;
  font-family: ${fonts.ArialSansSerif};
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  column-gap: 0.75rem;
  place-items: center;
  row-gap: 1rem;
  width: fit-content;
`;

const StyledLabel = styled.label`
  grid-column: span 3;
  font-weight: 700;
  color: ${colors.preto};
`;

const StyledButton = styled.button`
  align-items: flex-end;
  background: ${colors.gradienteAzul};
  border-radius: 50%;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  color: ${colors.branca};
  display: flex;
  font-size: 1.5rem;
  font-weight: 500;
  height: 1.75rem;
  justify-content: center;
  width: 1.75rem;

  :hover,
  :active {
    filter: saturate(70%);
  }
`;

const ButtonPlus = styled(StyledButton)`
  ::before {
    content: '+';
  }
`;

const StyledCounter = styled.p`
  background: ${colors.gradienteAzul};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin: 0;
`;

const ButtonMinus = styled(StyledButton)`
  ::before {
    content: '-';
  }
`;

export interface InputCounterProps {
  label?: string;
  onChange?: (value: number) => void;
}

export const AbInputCounter = ({ label, onChange }: InputCounterProps) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    if (onChange) {
      onChange(Number(counter));
    }
  }, [counter]);

  const incrementCounter = (amount: number): void => {
    if (counter === 0 && amount < 0) return;
    setCounter(currentValue => currentValue + amount);
  };

  return (
    <StyledDiv>
      <StyledLabel>{label}</StyledLabel>
      <ButtonMinus onClick={() => incrementCounter(-1)} />
      <StyledCounter>{counter.toString().padStart(2, '0')}</StyledCounter>
      <ButtonPlus onClick={() => incrementCounter(1)} />
    </StyledDiv>
  );
};
