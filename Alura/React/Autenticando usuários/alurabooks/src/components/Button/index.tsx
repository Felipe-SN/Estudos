import { colors, fonts } from 'components/UI/variables';
import styled, { css } from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
  /* background style by variant */
  background-color: ${props =>
    props.variantType === 'Primary' ? colors.mostarda : 'transparent'};
  /* color style by variant */
  color: ${props =>
    props.variantType === 'Primary' ? colors.branca : colors.mostarda};
  /* background and border on hover style by variant */
  ${props =>
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

  border: 0.125rem solid ${colors.mostarda};
  cursor: pointer;
  font-family: ${fonts.poppins};
  font-size: 1.25rem;
  font-weight: 700;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variantType?: 'Primary' | 'Secondary';
}

const Button = ({
  children,
  className,
  disabled,
  onClick,
  variantType = 'Primary',
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      variantType={variantType}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
