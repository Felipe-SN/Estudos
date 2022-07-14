import React from 'react';
import styled from 'styled-components';
import bank_logo from '../../assets/images/bank_logo.svg';
import { cores } from '../UI/variables';

const BtnHeader = styled.a`
  border-radius: 3px;
  border: 2px solid white;
  font-weight: 600;
  margin: 0 10px;
  padding: 5px 20px;
  text-align: center;

  background: ${(props) => (props.primary ? 'white' : cores.primaria)};
  color: ${(props) => (props.primary ? cores.primaria : 'white')};
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const StyledHeader = styled.nav`
  background-color: ${cores.primaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader primary href="https://google.com">
          Ajuda
        </BtnHeader>
        <BtnHeader href="https://google.com">Sair</BtnHeader>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
