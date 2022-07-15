import React from 'react';

import Titulo from '../Titulo';
import Conta from '../Conta';
import styled from 'styled-components';
import Extrato from '../Extrato';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Content = styled.section`
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Container = () => {
  return (
    <Wrapper>
      <Titulo>Olá Fulano!</Titulo>
      <Content>
        <Conta />
        <Extrato />
      </Content>
    </Wrapper>
  );
};

export default Container;
