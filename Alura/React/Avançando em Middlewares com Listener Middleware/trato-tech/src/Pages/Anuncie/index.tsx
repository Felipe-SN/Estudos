import { cadastrarItem } from 'store/reducers/itens';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Button from 'components/Button';
import Header from 'components/Header';
import Input from 'components/Input';
import MensagensDeErroForm from 'helpers/mensagensDeErroForm';
import styles from './Anuncie.module.scss';
import {
  carregarCategorias,
  carregarUmaCategoria,
} from 'store/reducers/categorias';

export default function Anuncie() {
  const dispatch = useAppDispatch();
  const { nomeCategoria = '' } = useParams();
  const categorias = useAppSelector(state =>
    state.categorias.map(({ nome, id }) => ({ nome, id }))
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      categoria: nomeCategoria,
      titulo: '',
      descricao: '',
      foto: '',
      preco: undefined,
    },
  });
  const cadastrar = (data: unknown) => {
    dispatch(cadastrarItem(data));
  };

  useEffect(() => {
    dispatch(
      nomeCategoria ? carregarUmaCategoria(nomeCategoria) : carregarCategorias()
    );
  }, [nomeCategoria]);

  const minLengthValue = 3;

  return (
    <div className={styles.container}>
      <Header
        titulo="Anuncie aqui!"
        descricao="Anuncie seu produto no melhor site do Brasil"
      />
      <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
        <Input
          {...register('titulo', { required: true, minLength: minLengthValue })}
          className={errors.titulo && styles.inputErro}
          alt="Nome do produto"
          placeholder="Nome do produto"
          type="text"
        />
        {errors.titulo && (
          <span role="alert" className={styles.mensagemErro}>
            {MensagensDeErroForm(errors.titulo.type, minLengthValue)}
          </span>
        )}
        <Input
          {...register('descricao', {
            required: true,
            minLength: minLengthValue,
          })}
          className={errors.descricao && styles.inputErro}
          alt="Descrição do produto"
          placeholder="descrição do produto"
          type="text"
        />
        {errors.descricao && (
          <span role="alert" className={styles.mensagemErro}>
            {MensagensDeErroForm(errors.descricao.type, minLengthValue)}
          </span>
        )}
        <Input
          {...register('foto', { required: true, minLength: minLengthValue })}
          className={errors.foto && styles.inputErro}
          alt="URL da imagem do produto"
          placeholder="URL da imagem do produto"
          type="text"
        />
        {errors.foto && (
          <span role="alert" className={styles.mensagemErro}>
            {MensagensDeErroForm(errors.foto.type, minLengthValue)}
          </span>
        )}
        <select
          {...register('categoria', { required: true })}
          disabled={nomeCategoria !== ''}
          className={errors.categoria && styles.inputErro}
          title="Categoria do produto"
        >
          <option disabled value={''}>
            Selecione a categoria
          </option>
          {categorias.map(cat => (
            <option key={cat.id} value={cat.id}>
              {cat.nome}
            </option>
          ))}
        </select>
        {errors.categoria && (
          <span role="alert" className={styles.mensagemErro}>
            {MensagensDeErroForm(errors.categoria.type)}
          </span>
        )}
        <Input
          {...register('preco', {
            required: true,
            min: 1,
            valueAsNumber: true,
          })}
          className={errors.preco && styles.inputErro}
          placeholder="Preço do produto"
          type="number"
        />
        {errors.preco && (
          <span role="alert" className={styles.mensagemErro}>
            {MensagensDeErroForm(errors.preco.type)}
          </span>
        )}
        <Button type="submit">Cadastrar produto</Button>
      </form>
    </div>
  );
}
