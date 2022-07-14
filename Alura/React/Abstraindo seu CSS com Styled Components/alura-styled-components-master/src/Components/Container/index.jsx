import React from 'react';

import Titulo from '../Titulo';
import Conta from '../Conta';
import styled from 'styled-components';
import { cores } from '../UI/variables';

const Wrapper = styled.div`
  background-color: ${cores.fundoClaro};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Container = () => {
  return (
    <Wrapper>
      <Titulo>Olá Fulano!</Titulo>
      <Content>
        <Conta />
      </Content>
    </Wrapper>
  );
};

export default Container;
