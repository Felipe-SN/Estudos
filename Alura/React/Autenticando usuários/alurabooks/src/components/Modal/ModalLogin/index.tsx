import Button from 'components/Button';
import InputField from 'components/InputField';
import { colors } from 'components/UI/variables';
import IDHelper from 'helpers/IDHelper';
import { Link } from 'react-router-dom';
import useModalOpenState from 'state/hooks/useModalOpenState';
import styled from 'styled-components';
import Modal from '..';

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

const ModalLogin = () => {
  const { setModalSingInIsOpen } = useModalOpenState();

  const openSingUp = () => {
    setModalSingInIsOpen(false);
  };

  return (
    <Modal title="Login">
      <StyledForm onSubmit={event => event.preventDefault()}>
        <InputsArea>
          <CustomInput
            index={IDHelper()}
            hasIcon={false}
            inputLabel="Email"
            type="email"
            placeholder="seuemail@maneiro.com.br"
            required={true}
          />
          <CustomInput
            index={IDHelper()}
            inputLabel="Senha"
            type="password"
            placeholder="************"
            required={true}
          />
        </InputsArea>
        <ResetPassword to={'!#'}>Esqueci minha senha</ResetPassword>
        <ButtonLogin>Fazer login</ButtonLogin>
      </StyledForm>
      <SingUpArea>
        <SingUpText>Ainda não tem uma conta?</SingUpText>
        <ModalButton onClick={openSingUp}>Criar conta</ModalButton>
      </SingUpArea>
    </Modal>
  );
};

export default ModalLogin;
