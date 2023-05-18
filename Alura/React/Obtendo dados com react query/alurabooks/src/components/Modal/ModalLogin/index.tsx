import { colors } from 'components/UI/variables';
import { Link } from 'react-router-dom';
import { userCalls } from 'Services/apiServices';
import { useState } from 'react';
import Button from 'components/Button';
import IDHelper from 'helpers/IDHelper';
import InputField from 'components/InputField';
import Modal from '..';
import sessionTokenHelper from 'helpers/sessionTokenHelper';
import styled from 'styled-components';
import useIsLoggedState from 'state/hooks/useIsLoggedState';
import useModalOpenState from 'state/hooks/useModalOpenState';

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
      <StyledForm onSubmit={e => handleOnSubmit(e)}>
        <InputsArea>
          <CustomInput
            index={IDHelper()}
            hasIcon={false}
            inputLabel="Email"
            type="email"
            onChange={e => setEmailValue(e.target.value)}
            placeholder="seuemail@maneiro.com.br"
            required={true}
            value={emailValue}
          />
          <CustomInput
            index={IDHelper()}
            inputLabel="Senha"
            type="password"
            onChange={e => setPassValue(e.target.value)}
            placeholder="************"
            required={true}
            value={passValue}
          />
        </InputsArea>
        <ResetPassword to={'!#'}>Esqueci minha senha</ResetPassword>
        <ButtonLogin text="Fazer login" />
      </StyledForm>
      <SingUpArea>
        <SingUpText>Ainda não tem uma conta?</SingUpText>
        <ModalButton onClick={() => setModalSingInIsOpen(false)} text="Criar conta" />
      </SingUpArea>
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
`;

const InputsArea = styled.div`
  display: grid;
  grid-area: formInputs;
  row-gap: 1rem;
`;

const CustomInput = styled(InputField)`
  max-height: 2.75rem;
  max-width: 31.75rem;
`;

const ResetPassword = styled(Link)`
  color: ${colors.azul};
  margin-left: 1.5rem;
`;

const ModalButton = styled(Button)`
  justify-self: end;
  font-size: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
`;

const ButtonLogin = styled(ModalButton)`
  margin-right: 1.5rem;
`;

const SingUpArea = styled.div`
  border-top: 0.063rem solid ${colors.azul};
  margin-top: 3rem;
  padding-top: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, auto);
`;

const SingUpText = styled.p`
  color: ${colors.azul};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.875rem;
`;
