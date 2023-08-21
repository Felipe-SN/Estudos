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
          onChange={e => setNameValue(e.target.value)}
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
          onChange={e => setEmailValue(e.target.value)}
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
          onChange={e => setAddressValue(e.target.value)}
          placeholder="Sua rua e número"
          required={true}
          type="text"
          value={addressValue}
        />
        <InputField
          $gridArea="complement"
          $inputLabel="complemento"
          className="form-input"
          onChange={e => setComplementValue(e.target.value)}
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
          onChange={e => setCepValue(e.target.value)}
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
          onChange={e => setPasswordValue(e.target.value)}
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
          onChange={e => setPassConfirmValue(e.target.value)}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+_])(?!.*[\s]).{6,16}$"
          placeholder="************"
          required={true}
          title="As senhas digitadas devem coincidir"
          type="password"
          value={PassConfirmValue}
        />
        <Button
          className="modal-sing-up__button"
          disabled={passwordValue.length < 8 || passwordValue !== PassConfirmValue}
          $text="Cadastrar"
        />
      </StyledForm>
    </Modal>
  );
}

const StyledForm = styled.form`
  column-gap: 1.5rem;
  display: grid;
  grid-template-areas:
    'name name'
    'email email'
    'address address'
    'complement cep'
    'password password'
    'passConfirm passConfirm'
    'submit submit';
  grid-template-columns: repeat(2, 9.6rem);
  grid-template-rows: repeat(7, min-content);
  row-gap: 0.75rem;

  .form-input {
    max-height: 2.09rem;
    max-width: -webkit-fill-available;
  }
  .modal-sing-up__button {
    font-size: 0.75rem;
    grid-area: submit;
    height: fit-content;
    justify-self: center;
    padding: 0.35rem 0.75rem;
    width: fit-content;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 19rem 11.625rem;
    row-gap: 1rem;

    .form-input {
      max-height: 2.75rem;
    }
    .modal-sing-up__button {
      font-size: 1rem;
      margin-top: 2rem;
      padding: 0.5rem 1rem;
    }
  }
`;
