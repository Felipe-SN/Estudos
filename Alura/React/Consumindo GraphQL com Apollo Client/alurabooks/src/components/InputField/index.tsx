import { colors, fonts } from 'components/UI/variables';
import { useRef, useState } from 'react';
import icons from 'data/icons.json';
import styled, { css } from 'styled-components';
import IDHelper from 'helpers/IDHelper';

export default function InputField({ ...props }: InputFieldProps) {
  const { className, $gridArea, $hasIcon = true, $inputLabel, $inputVariable = 'primary', type } = props;
  const [iconTransparent, setIconTransparent] = useState<boolean>(false);
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const changeVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (passwordRef.current.type === 'password') {
      passwordRef.current.type = 'text';
      setIconTransparent(true);
      return;
    }
    passwordRef.current.type = 'password';
    setIconTransparent(false);
  };

  const index = IDHelper();

  return (
    <InputPosition $gridArea={$gridArea}>
      {$inputLabel && <InputLabel htmlFor={`input${type}${index}`}>{$inputLabel}</InputLabel>}
      {type === 'password' ? (
        <PasswordWrapper className={className} $inputVariable={$inputVariable}>
          <PasswordField {...props} id={`input${type}${index}`} ref={passwordRef} />
          <EyeIcon
            type="button"
            $iconIsTransparent={iconTransparent}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => changeVisibility(e)}
            tabIndex={-1}
          />
        </PasswordWrapper>
      ) : (
        <StyledInput
          {...props}
          $hasIcon={$hasIcon}
          id={`input${type}${index}`}
          ref={inputRef}
          $current={inputRef.current}
        />
      )}
    </InputPosition>
  );
}

const InputPosition = styled.span<{ $gridArea?: string }>`
  grid-area: ${props => props.$gridArea};
`;

const InputLabel = styled.label`
  color: ${colors.azul};
  display: block;
  font-weight: 700;
  margin-bottom: 0.25rem;
  margin-left: 1.5rem;
  text-transform: capitalize;
`;

const StyledInput = styled.input<InputFieldProps>`
  appearance: none;
  background-color: ${props => (props.$inputVariable === 'secondary' ? 'transparent' : '')};
  border-radius: 1.5rem;
  border: 0.063rem solid ${props => (props.$inputVariable === 'secondary' ? colors.branca : colors.azul)};
  color: ${props => (props.$inputVariable === 'secondary' ? colors.branca : colors.azul)};
  font-family: ${fonts.poppins};
  font-size: 1rem;
  height: 25rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 50rem;

  &:focus {
    outline-color: ${props => (props.$inputVariable === 'secondary' ? colors.branca : colors.azul)};
    outline-width: 0.125rem;
  }

  &::placeholder {
    background-position-y: center;
    background-repeat: no-repeat;
    color: ${props => (props.$inputVariable === 'secondary' ? colors.branca : colors.cinzaTransparente)};
    font-size: 0.875rem;

    @media screen and (min-width: 1024px) {
      background-size: 1.5rem;
      font-size: 1rem;
    }

    ${props =>
      props.type === 'email' &&
      props.$hasIcon &&
      css`
        background-image: url(${icons.email});
        padding-left: 2rem;
      `}

    ${props =>
      props.type === 'search' &&
      props.$hasIcon &&
      css`
        --input-width: 23.75rem;
        @media screen and (min-width: 1024px) {
          --input-width: 36.25rem;
        }

        background-image: url(${icons.search});
        background-position-x: calc((var(--input-width) / 2) - (${props.placeholder?.length + 'em'} / 3));
        padding-left: 2rem;
        text-align: center;
      `}
  }

  /* invalid outline removed for password inputs */
  ${props =>
    props.type !== 'password' &&
    css`
      &:not(:placeholder-shown):invalid {
        outline-style: solid;
        outline-color: red;
      }
    `}

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

const PasswordWrapper = styled.div<InputFieldProps>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-radius: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  &:focus-within {
    outline-style: auto;
    outline-width: 0.125rem;
    &:has(input:not(:placeholder-shown):invalid) {
      outline-style: solid;
      outline-color: red;
    }
  }

  /* variant type alterations */
  ${props => {
    if (props.$inputVariable === 'secondary') {
      return css`
        background-color: transparent;
        border: 0.063rem solid ${colors.branca};
        color: ${colors.branca};

        &:focus-within {
          outline-color: ${colors.branca};
        }

        &::placeholder {
          color: ${colors.branca};
        }
      `;
    }
    return css`
      border: 0.063rem solid ${colors.azul};
      color: ${colors.azul};

      &:focus-within {
        /* border: 0.125rem solid ${colors.azul}; */
        outline-color: ${colors.azul};
      }

      &::placeholder {
        color: ${colors.cinzaTransparente};
      }
    `;
  }}
`;

const PasswordField = styled(StyledInput)`
  appearance: none !important;
  background: transparent !important;
  border-radius: 1.5rem;
  border: none !important;
  padding: 0 !important;
  width: -webkit-fill-available !important;

  &:focus {
    outline: none;
  }

  &::-ms-reveal {
    display: none;
  }
`;

const EyeIcon = styled.button<{ $iconIsTransparent: boolean }>`
  align-items: center;
  background: transparent !important;
  border-radius: 50%;
  border: none;
  display: flex;
  height: min-content;
  justify-content: center;
  padding: 0;
  width: min-content;

  &::before {
    background-image: url(${icons.eye});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    height: 1.5rem;
    width: 1.5rem;

    ${props =>
      props.$iconIsTransparent &&
      css`
        opacity: 0.5;
      `}
  }
`;

type InputFieldProps = {
  $gridArea?: string;
  $hasIcon?: boolean;
  $inputLabel?: string;
  $inputVariable?: 'primary' | 'secondary';
  $current?: HTMLInputElement;
} & React.ComponentPropsWithoutRef<React.JSXElementConstructor<React.InputHTMLAttributes<HTMLInputElement>>>;
