import Button from 'components/Button';
import InputField from 'components/InputField';
import { useState } from 'react';
import CEPSearch from 'Services/CEPSearch';
import useModalOpenState from 'state/recoil/hooks/useModalOpenState';
import styled from 'styled-components';
import Modal from '..';
import { userCalls } from 'Services/apiServices';

export default function ModalSingUp() {
  const [nameValue, setNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [addressValue, setAddressValue] = useState<string>('');
  const [complementValue, setComplementValue] = useState<string>('');
  const [cepValue, setCepValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [PassConfirmValue, setPassConfirmValue] = useState<string>('');
  const { setModalIsOpen } = useModalOpenState();

  const handleOnBlur = async (value: string) => {
    const data = await CEPSearch(value);
    if (data) {
      setAddressValue(`${data.logradouro},  - ${data.bairro}`);
      setComplementValue(data.complemento);
    }
  };

  const handleOnsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = {
      email: emailValue,
      senha: passwordValue,
      nome: nameValue,
      endereco: addressValue,
      complemento: complementValue,
      cep: cepValue,
    };

    const clearFields = () => {
      setNameValue('');
      setEmailValue('');
      setAddressValue('');
      setComplementValue('');
      setCepValue('');
      setPasswordValue('');
      setPassConfirmValue('');
      setModalIsOpen(false);
    };

    userCalls.register(newUser, clearFields);
  };

  return (
    <Modal title="cadastro">
      <StyledForm onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleOnsubmit(event)}>
        <InputField
          $gridArea="name"
          $inputLabel="nome"
          className="form-input"
          minLength={3}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setNameValue(e.target.value)}
          pattern="^(?=.*[a-z])(?=.{1,}[ ]\b)(?=.*[A-Z]).{3,}$"
          placeholder="Seu nome completo"
          required={true}
          type="text"
          value={nameValue}
        />
        <InputField
          $gridArea="email"
          $hasIcon={false}
          $inputLabel="email"
          className="form-input"
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setEmailValue(e.target.value)}
          placeholder="seuemail@maneiro.com.br"
          required={true}
          type="email"
          value={emailValue}
        />
        <InputField
          $gridArea="address"
          $inputLabel="endereço"
          className="form-input"
          minLength={5}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setAddressValue(e.target.value)}
          placeholder="Sua rua e número"
          required={true}
          type="text"
          value={addressValue}
        />
        <InputField
          $gridArea="complement"
          $inputLabel="complemento"
          className="form-input"
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setComplementValue(e.target.value)}
          placeholder="Apto/casa, bloco, referência"
          type="text"
          value={complementValue}
        />
        <InputField
          $gridArea="cep"
          $inputLabel="CEP"
          className="form-input"
          maxLength={8}
          onBlur={() => handleOnBlur(cepValue)}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setCepValue(e.target.value)}
          pattern="[\d]{5}-?[\d]{3}"
          placeholder="00000-000"
          required={true}
          type="text"
          value={cepValue}
        />
        <InputField
          $gridArea="password"
          $inputLabel="Senha"
          className="form-input"
          maxLength={32}
          minLength={8}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPasswordValue(e.target.value)}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+_])(?!.*[\s]).{8,32}$"
          placeholder="************"
          required={true}
          title="A senha deve conter entre 8 e 32 caracteres, deve conter pelo menos uma letra minuscula, uma letra maiúscula, um numero e um carácter especial."
          type="password"
          value={passwordValue}
        />
        <InputField
          $gridArea="passConfirm"
          $inputLabel="Confirmar senha"
          className="form-input"
          maxLength={32}
          minLength={8}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPassConfirmValue(e.target.value)}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+_])(?!.*[\s]).{6,16}$"
          placeholder="************"
          required={true}
          title="As senhas digitadas devem coincidir"
          type="password"
          value={PassConfirmValue}
        />
        <Button
          className="modal__form-button-sing-up"
          disabled={passwordValue.length < 8 || passwordValue !== PassConfirmValue}
          $text="Cadastrar"
        />
      </StyledForm>
    </Modal>
  );
}

const StyledForm = styled.form`
  display: grid;
  grid-template-areas:
    'name name'
    'email email'
    'address address'
    'complement cep'
    'password password'
    'passConfirm passConfirm'
    'submit submit';

  grid-template-columns: 19rem 11.625rem;
  grid-template-rows: repeat(7, min-content);

  grid-row-gap: 1rem;
  grid-column-gap: 1.5rem;

  .form-input {
    max-height: 2.75rem;
    max-width: -webkit-fill-available;
  }
  .modal__form-button-sing-up {
    grid-area: submit;
    height: fit-content;
    justify-self: center;
    margin-top: 2rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    width: fit-content;
  }
`;
