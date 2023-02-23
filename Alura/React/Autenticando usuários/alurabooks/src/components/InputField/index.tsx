import { colors, fonts } from 'components/UI/variables';
import icons from 'data/icons.json';
import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const InputPosition = styled.span<{ gridArea?: string }>`
  ${props =>
    props.gridArea &&
    css`
      grid-area: ${props.gridArea};
    `}
`;

const InputLabel = styled.label`
  color: ${colors.azul};
  display: block;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 0.25rem;
  margin-left: 1.5rem;
  text-transform: capitalize;
`;

const StyledInput = styled.input<InputFieldProps>`
  appearance: none;
  border-radius: 1.5rem;
  box-sizing: border-box;
  font-family: ${fonts.poppins};
  font-size: 1rem;
  height: 50rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 50rem;

  :focus {
    outline-width: 0.125rem;
  }

  ::placeholder {
    background-repeat: no-repeat;
    background-size: 1.5rem;
    line-height: 1.5rem;
  }

  /* invalid outline removed for password inputs */
  ${props =>
    props.type !== 'password' &&
    css`
      :not(:placeholder-shown):invalid {
        outline-style: solid;
        outline-color: red;
      }
    `}

  /* variant type alterations */
  ${props => {
    if (props.inputVariable === 'secondary') {
      return css`
        background-color: transparent;
        border: 0.063rem solid ${colors.branca};
        color: ${colors.branca};

        :focus {
          outline-color: ${colors.branca};
        }

        ::placeholder {
          color: ${colors.branca};
        }
      `;
    }
    return css`
      border: 0.063rem solid ${colors.azul};
      color: ${colors.azul};

      :focus {
        outline-color: ${colors.azul};
      }

      ::placeholder {
        color: ${colors.cinzaTransparente};
      }
    `;
  }}

  /* background-image icon setter by input type */
  ${props => {
    if (props.hasIcon) {
      if (props.type === 'email')
        return css`
          ::placeholder {
            background-image: url(${icons.email});
            background-position-y: center;
            padding-left: 2rem;
          }
        `;

      if (props.type === 'search')
        return css`
          ::placeholder {
            background-image: url(${icons.search});
            background-position: 9.75rem;
            padding-left: 11.688rem;
          }
        `;
    }
  }}
`;

const PasswordWrapper = styled.div<PasswordProps>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-radius: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  :focus-within {
    outline-style: auto;
    outline-width: 0.125rem;
    :has(input:not(:placeholder-shown):invalid) {
      outline-style: solid;
      outline-color: red;
    }
  }

  ::placeholder {
    line-height: 1.5rem;
  }

  /* variant type alterations */
  ${props => {
    if (props.inputVariable === 'secondary') {
      return css`
        background-color: transparent;
        border: 0.063rem solid ${colors.branca};
        color: ${colors.branca};

        :focus-within {
          outline-color: ${colors.branca};
        }

        ::placeholder {
          color: ${colors.branca};
        }
      `;
    }
    return css`
      border: 0.063rem solid ${colors.azul};
      color: ${colors.azul};

      :focus-within {
        /* border: 0.125rem solid ${colors.azul}; */
        outline-color: ${colors.azul};
      }

      ::placeholder {
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

  :focus {
    outline: none;
  }

  ::-ms-reveal {
    display: none;
  }
`;

const EyeIcon = styled.button<{ iconIsTransparent: boolean }>`
  align-items: center;
  background: transparent !important;
  border-radius: 50%;
  border: none;
  display: flex;
  height: min-content;
  justify-content: center;
  padding: 0;
  width: min-content;

  ::before {
    background-image: url(${icons.eye});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    height: 1.5rem;
    width: 1.5rem;

    ${props =>
      props.iconIsTransparent &&
      css`
        opacity: 0.5;
      `}
  }
`;

interface InputFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  gridArea?: string;
  hasIcon?: boolean;
  index?: string | number;
  inputLabel?: string;
  inputVariable?: 'primary' | 'secondary';
}

type PasswordProps = {
  inputVariable?: 'primary' | 'secondary';
};

const InputField = ({
  className,
  gridArea,
  hasIcon = true,
  index,
  inputLabel,
  inputVariable = 'primary',
  maxLength,
  minLength,
  onBlur,
  onChange,
  pattern,
  placeholder,
  required = false,
  title,
  type,
  value,
}: InputFieldProps) => {
  const [iconTransparent, setIconTransparent] = useState<boolean>(false);
  const passwordRef = useRef<any>(PasswordField);

  const changeVisibility = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (passwordRef.current.type === 'password') {
      passwordRef.current.type = 'text';
      setIconTransparent(true);
      return;
    }
    passwordRef.current.type = 'password';
    setIconTransparent(false);
  };

  return (
    <InputPosition gridArea={gridArea}>
      {inputLabel && (
        <InputLabel htmlFor={`input${type}${index}`}>{inputLabel}</InputLabel>
      )}
      {type === 'password' ? (
        <PasswordWrapper className={className} inputVariable={inputVariable}>
          <PasswordField
            className={className}
            id={`input${type}${index}`}
            maxLength={maxLength}
            minLength={minLength}
            onBlur={onBlur}
            onChange={onChange}
            pattern={pattern}
            placeholder={placeholder}
            ref={passwordRef}
            required={required}
            title={title}
            type={type}
            value={value}
          />
          <EyeIcon
            type="button"
            iconIsTransparent={iconTransparent}
            onClick={event => changeVisibility(event)}
            tabIndex={-1}
          />
        </PasswordWrapper>
      ) : (
        <StyledInput
          className={className}
          hasIcon={hasIcon}
          id={`input${type}${index}`}
          inputVariable={inputVariable}
          maxLength={maxLength}
          minLength={minLength}
          onBlur={onBlur}
          onChange={onChange}
          pattern={pattern}
          placeholder={placeholder}
          required={required}
          title={title}
          type={type}
          value={value}
        />
      )}
    </InputPosition>
  );
};

export default InputField;
