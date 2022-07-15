import styled from 'styled-components';
import { cores } from './variables';

export const Box = styled.div`
  background-color: ${({ theme }) => theme.inside};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 48%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const Btn = styled.button`
  background-color: ${cores.primaria};
  border-radius: 20px;
  border: none;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin: 15px auto 0px auto;
  padding: 8px 20px;
`;

export const Detalhe = styled.span`
  color: #41d3be;
  font-size: 24px;
`;

export const Icon = styled.img`
  height: 25px;
  width: 25px;
`;

export const IconTheme = styled(Icon)`
  filter: ${({ theme }) => theme.filter};
`;

export const Saldo = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const BtnTema = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 4vh;
`;
