import useListaParticipantes from 'state/hooks/useListaParticipantes';

const ListaParticipantes = () => {
  const { listaParticipantes } = useListaParticipantes();
  return (
    <ul>
      {listaParticipantes?.map(participante => (
        <li key={participante}>{participante}</li>
      ))}
    </ul>
  );
};

export default ListaParticipantes;
