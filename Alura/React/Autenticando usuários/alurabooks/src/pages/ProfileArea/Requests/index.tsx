import useProfileAreaTitleState from 'state/hooks/useProfileAreaTitleState';
import Button from 'components/Button';
import styled from 'styled-components';
import { colors } from 'components/UI/variables';
import { useEffect, useState } from 'react';
import serviceApiCommunication from 'Services/serviceApiCommunication';
import IRequest from 'interfaces/IRequest';
import { dateFormatter, priceFormatter } from 'helpers/formatters';

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

  .buttonsArea {
    align-self: end;
    display: flex;
    gap: 1rem;
    grid-column: 2/3;
    grid-row: 1/1;
    justify-self: end;
  }
`;

const DetailItem = styled.li`
  line-height: 1.5rem;

  > strong {
    font-weight: 700;
  }
`;

const DetailButton = styled(Button)`
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
`;

const { requestsCalls } = serviceApiCommunication();

const Requests = () => {
  const [requests, setRequests] = useState<IRequest[]>([]);
  const { setProfileAreaTitle, setProfileMenuTitle } =
    useProfileAreaTitleState();

  useEffect(() => {
    setProfileMenuTitle('Pedidos');
    setProfileAreaTitle('Meus pedidos');
    requestsCalls.get().then(response => setRequests(response));
  }, [setProfileAreaTitle, setProfileMenuTitle]);

  const excludeRequest = (requestID: number) => {
    requestsCalls.delete(requestID);
    setRequests(oldRequests =>
      oldRequests.filter(request => request.id !== requestID)
    );
  };

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
              <strong>{dateFormatter(new Date(request.data))}</strong>
            </DetailItem>
            <DetailItem>
              {'Valor total: '}
              <strong>{priceFormatter(request.total)}</strong>
            </DetailItem>
            <DetailItem>
              {'Entrega realizada em: '}
              <strong>{dateFormatter(new Date(request.entrega))}</strong>
            </DetailItem>
          </ul>
          <div className="buttonsArea">
            <DetailButton onClick={() => excludeRequest(request.id)}>
              Excluir
            </DetailButton>
            <DetailButton>Detalhes</DetailButton>
          </div>
        </RequestItem>
      ))}
    </RequestsList>
  );
};

export default Requests;
