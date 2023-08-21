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
    <CounterComponent className={className}>
      {label && <label>{label}</label>}
      <div>
        <button className="minus" title="remover" onClick={() => incrementCounter(-1)} />
        <span>{counter.toString().padStart(2, '0')}</span>
        <button className="plus" title="adicionar" onClick={() => incrementCounter(1)} />
      </div>
    </CounterComponent>
  );
}

const CounterComponent = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  
  @media screen and (min-width: 1728px) {
    display: grid;
    gap: 1.625rem;
    justify-items: center;
  }

  & > label {
    background: ${colors.gradienteAzul};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-size: 1.125rem;
    font-weight: 700;

    @media screen and (min-width: 1728px) {
      font-size: 1.25rem;
    }
  }

  & > div {
    align-items: center;
    display: flex;
    gap: 0.5rem;

    @media screen and (min-width: 1728px) {
      gap: 1rem;
    }

    & > button {
      align-items: center;
      background: ${colors.gradienteAzul};
      border-radius: 50%;
      border: none;
      color: ${colors.branca};
      cursor: pointer;
      display: flex;
      font-size: 1.5rem;
      font-weight: 500;
      height: 2rem;
      justify-content: center;
      padding: 0;
      width: 2rem;

      @media screen and (min-width: 1024px) {
      }

      &:hover,
      &:active {
        filter: saturate(70%);
      }

      &.minus::before {
        content: '\u2212';
      }

      &.plus::before {
        content: '\u002B';
      }
    }

    & > span {
      background: ${colors.gradienteAzul};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      font-size: 1.125rem;
      margin: 0;
      min-width: 1.5rem;
      text-align: center;

      @media screen and (min-width: 1728px) {
        font-size: 1.5rem;
        min-width: 2rem;
      }
    }
  }
`;

export interface InputCounterProps {
  className?: string;
  label?: string;
  onChange?: (value: number) => void;
}
