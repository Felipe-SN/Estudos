import { colors } from 'components/UI/variables';
import { dateFormatter, priceFormatter } from 'helpers/formatters';
import Button from 'components/Button';
import Loader from 'components/Loader';
import NotFound from 'pages/NotFound';
import styled from 'styled-components';
import useRequestQuery from 'state/reactQuery/hooks/useRequestQuery';

export default function RequestsList() {
  const { queryInfo, deleteRequest } = useRequestQuery();
  const { data: requests, isLoading, error } = queryInfo;
  const { mutate: exclude } = deleteRequest;

  if (error) return <NotFound text={error.message} />;
  if (isLoading) return <Loader />;

  return (
    <List>
      {requests?.map(request => (
        <li key={request.id}>
          <div className="request-details">
            <h4>Resumo da Compra</h4>
            <p>
              Pedido: <strong>{request.id}</strong>
            </p>
            <p>
              Data do pedido: <strong>{dateFormatter(new Date(request.data))}</strong>
            </p>
            <p>
              Valor total: <strong>{priceFormatter(request.total)}</strong>
            </p>
            <p>
              Entrega realizada em: <strong>{dateFormatter(new Date(request.entrega))}</strong>
            </p>
          </div>
          <div className="buttons-area">
            <Button $text="Excluir" onClick={() => exclude(request.id)} />
            <Button $text="Detalhes" />
          </div>
        </li>
      ))}
    </List>
  );
}

const List = styled.ul`
  display: grid;
  max-height: 31.75rem;
  overflow-y: scroll;
  row-gap: 2rem;
  scroll-behavior: smooth;

  @media screen and (min-width: 1024px) {
    &::-webkit-scrollbar {
      width: 0;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }

  @media screen and (min-width: 1728px) {
    max-width: 64.8125rem;
  }

  & > li {
    @media screen and (min-width: 1024px) {
      align-items: flex-end;
      display: flex;
      justify-content: space-between;
    }

    &:not(:last-child) {
      border-bottom: 0.063rem solid ${colors.azul};

      @media screen and (min-width: 1024px) {
        padding-bottom: 1.5rem;
      }
    }

    & > .request-details {
      & > h4 {
        background: ${colors.gradienteAzul};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 1rem;

        @media screen and (min-width: 1024px) {
          display: none;
        }
      }

      & > p {
        &:not(:last-child) {
          margin-bottom: 0.5rem;
        }

        & > strong {
          font-weight: 700;
        }
      }
    }

    & > .buttons-area {
      display: grid;
      gap: 1rem;
      margin: 1.5rem 0;

      @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(2, auto);
        margin: 0;
      }

      & > button {
        padding-bottom: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        width: -webkit-fill-available;
      }
    }
  }
`;
