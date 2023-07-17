import { colors } from 'components/UI/variables';
import { dateFormatter, priceFormatter } from 'helpers/formatters';
import Button from 'components/Button';
import styled from 'styled-components';
import useRequestQuery from 'state/reactQuery/hooks/useRequestQuery';
import NotFound from 'pages/NotFound';

export default function RequestsList() {
  const { queryInfo, deleteRequest } = useRequestQuery();
  const { data: requests, isSuccess, error } = queryInfo;
  const { mutate: exclude } = deleteRequest;

  return (
    <StyledRequestsList>
      {error && <NotFound text={error.message} />}
      {isSuccess &&
        requests?.map(request => (
          <RequestItem key={request.id}>
            <ul>
              <DetailItem>
                Pedido: <strong>{request.id}</strong>
              </DetailItem>
              <DetailItem>
                Data do pedido: <strong>{dateFormatter(new Date(request.data))}</strong>
              </DetailItem>
              <DetailItem>
                Valor total: <strong>{priceFormatter(request.total)}</strong>
              </DetailItem>
              <DetailItem>
                Entrega realizada em: <strong>{dateFormatter(new Date(request.entrega))}</strong>
              </DetailItem>
            </ul>
            <div className="buttons-area">
              <Button className="action-button" $text="Excluir" onClick={() => exclude(request.id)} />
              <Button className="action-button" $text="Detalhes" />
            </div>
          </RequestItem>
        ))}
    </StyledRequestsList>
  );
}

const StyledRequestsList = styled.ul`
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

  .action-button {
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
  }
`;

const RequestItem = styled.li`
  display: grid;
  grid-template-columns: max-content 1fr;
  padding-bottom: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  &:not(:first-child) {
    padding-top: 2.5rem;
  }

  &:not(:last-child) {
    border-bottom-color: ${colors.azul};
    border-bottom-style: solid;
    border-bottom-width: 0.063rem;
  }

  .buttons-area {
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
