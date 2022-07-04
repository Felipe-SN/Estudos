import axios from 'axios';
import IPaginacao from 'interfaces/IPaginacao';
import { useEffect, useState } from 'react';
import IRestaurante from 'interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';

const ListaRestaurantesAlternativa = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [proximaPagina, setProximaPagina] = useState('');
  const [paginaAnterior, setPaginaAnterior] = useState('');

  const carregaDados = (url: string) => {
    axios
      .get<IPaginacao<IRestaurante>>(url)
      .then(response => {
        setRestaurantes(response.data.results);
        setPaginaAnterior(response.data.previous);
        setProximaPagina(response.data.next);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    carregaDados('http://localhost:8000/api/v1/restaurantes/');
  }, []);

  return (
    <section className={style.ListaRestaurantes}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      {restaurantes?.map(item => (
        <Restaurante restaurante={item} key={item.id} />
      ))}
      <button onClick={() => carregaDados(paginaAnterior)} disabled={!paginaAnterior} > {'< Anterior'} </button>
      <button onClick={() => carregaDados(proximaPagina)} disabled={!proximaPagina} > {'Proxima >'} </button>
    </section>
  );
};

export default ListaRestaurantesAlternativa;
