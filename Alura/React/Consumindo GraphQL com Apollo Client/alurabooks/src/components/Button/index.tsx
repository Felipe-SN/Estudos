import { colors, fonts } from 'components/UI/variables';
import styled, { css } from 'styled-components';

export default function Button({ ...props }: ButtonProps) {
  const { text, variantType = 'Primary' } = props;
  return (
    <StyledButton {...props} variantType={variantType}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonProps>`
  /* background style by variant */
  background-color: ${props => (props.variantType === 'Primary' ? colors.mostarda : 'transparent')};
  /* color style by variant */
  color: ${props => (props.variantType === 'Primary' ? colors.branca : colors.mostarda)};
  /* background and border on hover style by variant */
  ${props =>
    props.variantType === 'Primary'
      ? css`
          border: none;
          &:hover {
            background-color: ${colors.mostardaEscura};
          }
        `
      : css`
          border: 0.125rem solid ${colors.mostarda};
          &:hover {
            border: 0.125rem solid ${colors.mostardaEscura};
            color: ${colors.mostardaEscura};
          }
        `}

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

type ButtonProps = {
  variantType?: 'Primary' | 'Secondary';
  text?: string;
} & React.ComponentPropsWithoutRef<React.JSXElementConstructor<React.ButtonHTMLAttributes<HTMLButtonElement>>>;
