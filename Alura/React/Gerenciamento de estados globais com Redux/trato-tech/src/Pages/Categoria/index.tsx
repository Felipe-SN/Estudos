import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'store';

export default function Categoria() {
  const { nomeCategoria } = useParams();
  const categoria = useSelector((state: RootState) =>
    state.categorias.find(categoria => categoria.id === nomeCategoria)
  );

  return (
    <div>
      {categoria && (
        <Header
          titulo={categoria.nome}
          descricao={categoria.descricao}
          imagem={categoria.header}
        />
      )}
    </div>
  );
}
