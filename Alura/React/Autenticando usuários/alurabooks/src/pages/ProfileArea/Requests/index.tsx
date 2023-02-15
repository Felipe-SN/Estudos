import useProfileAreaTitleState from 'state/hooks/useProfileAreaTitleState';
import requests from 'data/requests.json';
import Button from 'components/Button';
import styled from 'styled-components';
import { colors } from 'components/UI/variables';
import { useEffect } from 'react';

const RequestsList = styled.ul`
  max-height: 31.75rem;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

const RequestItem = styled.li`
  display: grid;
  grid-template-columns: max-content 1fr;
  padding-bottom: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  :not(:first-child) {
    padding-top: 2.5rem;
  }

  :not(:last-child) {
    border-bottom-color: ${colors.azul};
    border-bottom-style: solid;
    border-bottom-width: 0.063rem;
  }
`;

const DetailItem = styled.li`
  line-height: 1.5rem;

  > strong {
    font-weight: 700;
  }
`;

const DetailButton = styled(Button)`
  align-self: end;
  grid-column: 2/3;
  justify-self: end;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
`;

const Requests = () => {
  const { setProfileAreaTitle, setProfileMenuTitle } =
    useProfileAreaTitleState();

  useEffect(() => {
    setProfileMenuTitle('Pedidos');
    setProfileAreaTitle('Meus pedidos');
  }, [setProfileAreaTitle, setProfileMenuTitle]);

  return (
    <RequestsList>
      {requests.map(request => (
        <RequestItem key={request.id}>
          <ul>
            <DetailItem>
              Pedido: <strong>{request.id}</strong>
            </DetailItem>
            <DetailItem>
              {'Data do pedido: '}
              <strong>
                {Intl.DateTimeFormat('pt-br', { dateStyle: 'short' }).format(
                  new Date(request.data)
                )}
              </strong>
            </DetailItem>
            <DetailItem>
              {'Valor total: '}
              <strong>
                {Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(request.total)}
              </strong>
            </DetailItem>
            <DetailItem>
              {'Entrega realizada em: '}
              <strong>
                {Intl.DateTimeFormat('pt-br', { dateStyle: 'short' }).format(
                  new Date(request.entrega)
                )}
              </strong>
            </DetailItem>
          </ul>
          <DetailButton>Detalhes</DetailButton>
        </RequestItem>
      ))}
    </RequestsList>
  );
};

export default Requests;
