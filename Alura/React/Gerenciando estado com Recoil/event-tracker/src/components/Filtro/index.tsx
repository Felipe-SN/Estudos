import { IFiltroEventos } from 'interfaces/IFiltroEventos';
import React, { useState } from 'react';
import useAtualizarFiltrosEventos from 'state/hooks/useAtualizarFiltrosEventos';
import style from './Filtro.module.scss';

const Filtro: React.FC = () => {
  const [data, setData] = useState('');
  const [estado, setEstado] = useState<string>('null');
  const setFiltrosEventos = useAtualizarFiltrosEventos();

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const filtro: IFiltroEventos = {};

    if (data) filtro.data = new Date(data);
    if (estado) filtro.completo = JSON.parse(estado);

    setFiltrosEventos(filtro);
  };

  return (
    <form className={style.Filtro} onSubmit={submeterForm}>
      <h3 className={style.titulo}>Filtrar por data</h3>
      <input
        className={style.input}
        name="data"
        onChange={evento => setData(evento.target.value)}
        placeholder="Por data"
        type="date"
        value={data}
      />
      <h3 className={style.titulo}>Filtrar por:</h3>
      <select
        className={style.input}
        name="estado"
        onChange={evento => setEstado(evento.target.value)}
      >
        <option value="null">Todos</option>
        <option value="true">Concluídos</option>
        <option value="false">Pendentes</option>
      </select>

      <button className={style.botao}>Filtrar</button>
    </form>
  );
};

export default Filtro;

