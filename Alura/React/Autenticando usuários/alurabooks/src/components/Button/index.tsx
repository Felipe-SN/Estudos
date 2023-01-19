import { colors, fonts } from 'components/UI/variables';
import IChildren from 'interfaces/IChildren';
import styled, { css } from 'styled-components';

interface ButtonProps extends IChildren {
  className?: string;
  onClick?: () => void;
  variantType?: 'Primary' | 'Secondary';
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props: ButtonProps) =>
    props.variantType === 'Primary' ? colors.mostarda : 'transparent'};
  border: 0.125rem solid ${colors.mostarda};
  color: ${(props: ButtonProps) =>
    props.variantType === 'Primary' ? colors.branca : colors.mostarda};
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
  cursor: pointer;
  font-family: ${fonts.poppins};
  font-weight: 700;
  font-size: 1.25rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
`;

const Button = ({
  className,
  onClick,
  children,
  variantType = 'Primary',
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      variantType={variantType}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
