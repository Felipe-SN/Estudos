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
    <Modal title="Login">
      <StyledForm onSubmit={(e: FormEvent<HTMLFormElement>) => handleOnSubmit(e)}>
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
        <ResetPassword to={'!#'}>Esqueci minha senha</ResetPassword>
        <Button className="modal-sing-in__button" $text="Fazer login" />
      </StyledForm>
      <SingInArea>
        <p>Ainda não tem uma conta?</p>
        <Button
          className="modal-sing-in__button--login"
          onClick={() => setModalSingInIsOpen(false)}
          $text="Criar conta"
        />
      </SingInArea>
    </Modal>
  );
}

const { token } = sessionTokenHelper();

const StyledForm = styled.form`
  display: grid;
  grid-template-areas: 'formInputs formInputs' 'forgoPass loginBtn';
  grid-template-columns: repeat(2, max-content);
  grid-template-columns: repeat(2, max-content);
  row-gap: 1rem;

  .modal-sing-in__form-input {
    max-height: 2.75rem;
    max-width: 31.75rem;
  }

  .modal-sing-in__button {
    justify-self: end;
    font-size: 1rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
  }
`;

const InputsArea = styled.div`
  display: grid;
  grid-area: formInputs;
  row-gap: 1rem;
`;

const ResetPassword = styled(Link)`
  color: ${colors.azul};
  margin-left: 1.5rem;
`;

const SingInArea = styled.div`
  border-top: 0.063rem solid ${colors.azul};
  margin-top: 3rem;
  padding-top: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, auto);
  & > p {
    color: ${colors.azul};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.875rem;
  }

  .modal-sing-in__button--login {
    justify-self: end;
    font-size: 1rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
  }
`;
