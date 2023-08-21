import { colors } from 'components/UI/variables';
import { FormEvent, SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import { userCalls } from 'Services/apiServices';
import Button from 'components/Button';
import InputField from 'components/InputField';
import Modal from '..';
import sessionTokenHelper from 'helpers/sessionTokenHelper';
import styled from 'styled-components';
import useIsLoggedState from 'state/recoil/hooks/useIsLoggedState';
import useModalOpenState from 'state/recoil/hooks/useModalOpenState';

export default function ModalLogin() {
  const { setModalSingInIsOpen, setModalIsOpen } = useModalOpenState();
  const { setIsLogged } = useIsLoggedState();
  const [emailValue, setEmailValue] = useState<string>('');
  const [passValue, setPassValue] = useState<string>('');

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email: emailValue,
      senha: passValue,
    };

    const onSuccessfulSubmit = () => {
      setEmailValue('');
      setPassValue('');
      setModalIsOpen(false);
      setIsLogged(token.get({ tokenVerify: true }) !== null);
    };

    userCalls.login(user, onSuccessfulSubmit);
  };

  return (
    <ModalSingIn title="Login">
      <SingInArea onSubmit={(e: FormEvent<HTMLFormElement>) => handleOnSubmit(e)}>
        <InputsArea>
          <InputField
            $hasIcon={false}
            $inputLabel="Email"
            className="modal-sing-in__form-input"
            onChange={(e: { target: { value: SetStateAction<string> } }) => setEmailValue(e.target.value)}
            placeholder="seuemail@maneiro.com.br"
            required={true}
            type="email"
            value={emailValue}
          />
          <InputField
            $inputLabel="Senha"
            className="modal-sing-in__form-input"
            type="password"
            onChange={(e: { target: { value: SetStateAction<string> } }) => setPassValue(e.target.value)}
            placeholder="************"
            required={true}
            value={passValue}
          />
        </InputsArea>
        <ResetPasswordLink to={'!#'}>Esqueci minha senha</ResetPasswordLink>
        <Button className="modal-sing-in__button modal-sing-in__button--login" $text="Fazer login" />
      </SingInArea>
      <NoAccountArea>
        <p>Ainda não tem uma conta?</p>
        <Button className="modal-sing-in__button" onClick={() => setModalSingInIsOpen(false)} $text="Criar conta" />
      </NoAccountArea>
    </ModalSingIn>
  );
}

const { token } = sessionTokenHelper();

const ModalSingIn = styled(Modal)`
  .modal-sing-in__button {
    justify-self: end;
    font-size: 0.75rem;
    padding: 0.35rem 0.75rem;

    &--login {
      grid-area: loginBtn;
    }
  }

  @media screen and (min-width: 1024px) {
    .modal-sing-in__button {
      font-size: 1rem;
      margin-right: 1.5rem;
      padding: 0.5rem 1rem;
    }
  }
`;

const SingInArea = styled.form`
  align-items: center;
  display: grid;
  grid-template-areas: 'formInputs formInputs' 'forgoPass loginBtn';

  @media screen and (min-width: 1024px) {
    row-gap: 1rem;

    & > a {
      align-self: flex-start;
    }
  }
`;

const InputsArea = styled.div`
  display: grid;
  grid-area: formInputs;
  row-gap: 0.75rem;
  margin-bottom: 0.75rem;

  .modal-sing-in__form-input {
    max-height: 2.125rem;
    max-width: 20.625rem;
  }

  @media screen and (min-width: 1024px) {
    row-gap: 1rem;
    margin-bottom: 0;

    .modal-sing-in__form-input {
      max-height: 2.75rem;
      max-width: 31.75rem;
    }
  }
`;

const ResetPasswordLink = styled(Link)`
  color: ${colors.azul};
  font-size: 0.75rem;
  grid-area: forgoPass;

  @media screen and (min-width: 1024px) {
    font-size: 1rem;
    margin-left: 1.5rem;
  }
`;

const NoAccountArea = styled.div`
  align-items: center;
  border-top: 0.063rem solid ${colors.azul};
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin-top: 1.5rem;
  padding-top: 1.15rem;

  & > p {
    color: ${colors.azul};
    font-size: 0.9rem;
    font-weight: 700;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 3rem;
    padding-top: 2rem;

    & > p {
      font-size: 1.25rem;
      margin-left: 1.5rem;
    }
  }
`;
