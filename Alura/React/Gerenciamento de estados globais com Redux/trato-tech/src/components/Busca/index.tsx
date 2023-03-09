import { useAppDispatch, useAppSelector } from 'store/hooks';
import { mudarBusca, resetBusca } from 'store/reducers/busca';
import { useEffect } from 'react';
import styles from './Busca.module.scss';
import { useLocation } from 'react-router-dom';

export default function Busca() {
  const busca = useAppSelector(state => state.busca);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const resolverBusca = (value: string) => dispatch(mudarBusca(value));

  useEffect(() => {
    dispatch(resetBusca());
  }, [location.pathname, dispatch]);

  return (
    <div className={styles.busca}>
      <input
        className={styles.input}
        onChange={e => resolverBusca(e.target.value)}
        placeholder="Oque você procura?"
        value={busca}
      />
    </div>
  );
}
