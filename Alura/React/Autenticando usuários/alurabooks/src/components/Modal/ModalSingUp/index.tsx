import Button from 'components/Button';
import InputField from 'components/InputField';
import IDHelper from 'helpers/IDHelper';
import { useState } from 'react';
import CEPSearch from 'Services/CEPSearch';
import styled from 'styled-components';
import Modal from '..';

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
`;

const CustomInput = styled(InputField)`
  max-height: 2.75rem;
  max-width: -webkit-fill-available;
`;

const ButtonSingUp = styled(Button)`
  grid-area: submit;
  height: fit-content;
  justify-self: center;
  margin-top: 2rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  width: fit-content;
`;

const ModalSingUp = () => {
  const [nameValue, setNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [addressValue, setAddressValue] = useState<string>('');
  const [complementValue, setComplementValue] = useState<string>('');
  const [cepValue, setCepValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [PassConfirmValue, setPassConfirmValue] = useState<string>('');

  return (
    <Modal title="cadastro">
      <StyledForm onSubmit={event => ''}>
        <CustomInput
          gridArea="name"
          index={IDHelper()}
          inputLabel="nome"
          placeholder="Seu nome completo"
          required={true}
          type="text"
          value={nameValue}
          onChange={e => setNameValue(e.target.value)}
        />
        <CustomInput
          gridArea="email"
          hasIcon={false}
          index={IDHelper()}
          inputLabel="email"
          placeholder="seuemail@maneiro.com.br"
          required={true}
          type="email"
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)}
        />
        <CustomInput
          gridArea="address"
          index={IDHelper()}
          inputLabel="endereço"
          placeholder="Sua rua e número"
          required={true}
          type="text"
          value={addressValue}
          onChange={e => setAddressValue(e.target.value)}
        />
        <CustomInput
          gridArea="complement"
          index={IDHelper()}
          inputLabel="complemento"
          placeholder="Apto/casa, bloco, referência"
          type="text"
          value={complementValue}
          onChange={e => setComplementValue(e.target.value)}
        />
        <CustomInput
          gridArea="cep"
          index={IDHelper()}
          inputLabel="CEP"
          placeholder="00000-000"
          required={true}
          type="text"
          value={cepValue}
          onChange={e => setCepValue(e.target.value)}
          onBlur={() => CEPSearch(cepValue!)}
        />
        <CustomInput
          gridArea="password"
          index={IDHelper()}
          inputLabel="Senha"
          placeholder="************"
          required={true}
          type="password"
          value={passwordValue}
          onChange={e => setPasswordValue(e.target.value)}
        />
        <CustomInput
          gridArea="passConfirm"
          index={IDHelper()}
          inputLabel="Confirmar senha"
          placeholder="************"
          required={true}
          type="password"
          value={PassConfirmValue}
          onChange={e => setPassConfirmValue(e.target.value)}
        />
        <ButtonSingUp>Cadastrar</ButtonSingUp>
      </StyledForm>
    </Modal>
  );
};

export default ModalSingUp;
