import { useEffect, useState } from 'react';
import Item from './Item';
import cardapio from './itens.json';
import styles from './Itens.module.scss';

type Props = { busca: string; filtro: Number | null; ordenador: string };

export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio);
  const { busca, filtro, ordenador } = props;

  useEffect(() => {
    const testaBusca = (title: string) => {
      const regex = new RegExp(busca, 'i');
      return regex.test(title);
    };

    const testaFiltro = (id: Number | null) => {
      if (filtro !== null) return filtro === id;
      return true;
    };

    const ordenarPropriedadeCrescente = (
      lista: typeof cardapio,
      propriedade: 'size' | 'serving' | 'price'
    ) => {
      return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
    };

    const ordenar = (novaLista: typeof cardapio) => {
      switch (ordenador) {
        case 'porcao':
          return ordenarPropriedadeCrescente(novaLista, 'size');
        case 'qtd_pessoas':
          return ordenarPropriedadeCrescente(novaLista, 'serving');
        case 'preco':
          return ordenarPropriedadeCrescente(novaLista, 'price');
        default:
          return novaLista;
      }
    };

    const novaLista = cardapio.filter(
      item => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
