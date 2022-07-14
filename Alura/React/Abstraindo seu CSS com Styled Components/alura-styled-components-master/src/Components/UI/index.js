import styled from 'styled-components';
import { cores } from './variables';

export const Icon = styled.img`
  height: 25px;
  width: 25px;
`;

export const Box = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 48%;
`;

export const Btn = styled.button`
  background-color: ${cores.primaria};
  border-radius: 20px;
  border: none;
  color: white;
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin: 15px auto 0px auto;
  padding: 8px 20px;

  cursor: pointer;
`;

export const Detalhe = styled.span`
  color: #41d3be;
  font-size: 24px;
`;
