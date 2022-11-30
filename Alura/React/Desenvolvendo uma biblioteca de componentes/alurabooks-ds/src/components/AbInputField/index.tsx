import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../UI/variables';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${fonts.ArialSansSerif};
  gap: 0.625rem;
`;

const StyledLabel = styled.label`
  font-weight: 700;
  padding-left: 1.5rem;
  color: ${colors.azul};
`;

const StyledInput = styled.input`
  border-radius: 1.5rem;
  border: 0.063rem solid ${colors.azul};
  max-width: 31.75rem;
  line-height: 1.5rem;
  padding-bottom: 0.625rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.625rem;

  :focus {
    outline: none;
  }

  ::placeholder {
    opacity: 0.3;
  }
`;

export interface InputFieldProps {
  type?: string;
  inputID: string;
  inputPlaceholder?: string;
  label: string;
  onChange: (value: string) => void;
}

export const AbInputField = ({
  type = 'text',
  inputID,
  inputPlaceholder,
  label,
  onChange,
}: InputFieldProps) => {
  return (
    <StyledDiv>
      <StyledLabel htmlFor={inputID}>{label}</StyledLabel>
      <StyledInput
        type={type}
        id={inputID}
        placeholder={inputPlaceholder}
        onChange={event => onChange(event.target.value)}
      />
    </StyledDiv>
  );
};
