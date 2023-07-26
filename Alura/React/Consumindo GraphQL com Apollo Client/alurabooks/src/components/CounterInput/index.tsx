import { colors } from '../UI/variables';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function CounterInput({ className, label, onChange }: InputCounterProps) {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    if (onChange) {
      onChange(Number(counter));
    }
  }, [counter, onChange]);

  const incrementCounter = (amount: number): void => {
    if (counter === 0 && amount < 0) return;
    setCounter(currentValue => currentValue + amount);
  };

  return (
    <StyledDiv className={className}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <ButtonMinus onClick={() => incrementCounter(-1)} />
      <StyledCounter>{counter.toString().padStart(2, '0')}</StyledCounter>
      <ButtonPlus onClick={() => incrementCounter(1)} />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: grid;
  font-family: inherit;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  column-gap: 0.75rem;
  place-items: center;
  row-gap: 1rem;
  width: fit-content;
`;

const StyledLabel = styled.label`
  background: ${colors.gradienteAzul};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-size: 1.25rem;
  font-weight: 700;
  grid-column: span 3;
`;

const StyledButton = styled.button`
  align-items: center;
  background: ${colors.gradienteAzul};
  border-radius: 50%;
  border: none;
  box-sizing: border-box;
  color: ${colors.branca};
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  font-weight: 500;
  height: 1.75rem;
  justify-content: center;
  width: 1.75rem;

  &:hover,
  &:active {
    filter: saturate(70%);
  }
`;

const ButtonPlus = styled(StyledButton)`
  &::before {
    content: '+';
  }
`;

const StyledCounter = styled.span`
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
  padding-bottom: 0.3rem;
  &::before {
    content: '-';
  }
`;

export interface InputCounterProps {
  className?: string;
  label?: string;
  onChange?: (value: number) => void;
}
