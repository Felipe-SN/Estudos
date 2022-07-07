import axios, { AxiosRequestConfig } from 'axios';
import IPaginacao from 'interfaces/IPaginacao';
import React, { useEffect, useState } from 'react';
import IRestaurante from 'interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import ISearchParams from 'interfaces/ISearchParams';

const ListaRestaurantesAlternativa = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [proximaPagina, setProximaPagina] = useState('');
  const [paginaAnterior, setPaginaAnterior] = useState('');
  const [busca, setBusca] = useState('');
  const [ordem, setOrdem] = useState('');

  const carregaDados = (url: string, options: AxiosRequestConfig = {}) => {
    axios
      .get<IPaginacao<IRestaurante>>(url, options)
      .then(response => {
        setRestaurantes(response.data.results);
        setPaginaAnterior(response.data.previous);
        setProximaPagina(response.data.next);
      })
      .catch(error => console.log(error));
  };

  const buscarOrdenar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const options = {
      params: {} as ISearchParams,
    };

    if (busca) {
      options.params.search = busca;
    }

    if (ordem) {
      options.params.ordering = ordem;
    }

    carregaDados('http://localhost:8000/api/v1/restaurantes/', options);
  };

  useEffect(() => {
    carregaDados('http://localhost:8000/api/v1/restaurantes/');
  }, []);

  return (
    <section className={style.ListaRestaurantes}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      <form onSubmit={buscarOrdenar}>
        <input
          type="text"
          value={busca}
          onChange={event => setBusca(event.target.value)}
        />
        <select value={ordem} onChange={event => setOrdem(event.target.value)}>
          <option value="">Padrão</option>
          <option value="id">Por ID</option>
          <option value="nome">Por Nome</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
      {restaurantes?.map(item => (
        <Restaurante restaurante={item} key={item.id} />
      ))}
      <button
        onClick={() => carregaDados(paginaAnterior)}
        disabled={!paginaAnterior}
      >
        {' '}
        {'< Anterior'}{' '}
      </button>
      <button
        onClick={() => carregaDados(proximaPagina)}
        disabled={!proximaPagina}
      >
        {' '}
        {'Proxima >'}{' '}
      </button>
    </section>
  );
};

export default ListaRestaurantesAlternativa;
