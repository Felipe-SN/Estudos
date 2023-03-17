import { cadastrarItem } from 'store/reducers/itens';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useForm } from 'react-hook-form';
import Button from 'components/Button';
import Header from 'components/Header';
import MensagensDeErroForm from 'helpers/mensagensDeErroForm';
import styles from './Anuncie.module.scss';

export default function Anuncie() {
  const dispatch = useAppDispatch();
  const categorias = useAppSelector(state =>
    state.categorias.map(({ nome, id }) => ({ nome, id }))
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      categoria: '',
      nome: '',
      descricao: '',
      imagem: '',
      preco: undefined,
    },
  });
  const minLengthValue = 3;

  const cadastrar = (data: unknown) => {
    dispatch(cadastrarItem(data));
  };

  return (
    <div className={styles.container}>
      <Header
        titulo="Anuncie aqui!"
        descricao="Anuncie seu produto no melhor site do Brasil"
      />
      <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
        <input
          {...register('nome', { required: true, minLength: minLengthValue })}
          className={errors.nome && styles.inputErro}
          alt="Nome do produto"
          placeholder="Nome do produto"
          type="text"
        />
        {errors.nome && (
          <span role="alert" className={styles.mensagemErro}>
            {MensagensDeErroForm(errors.nome.type, minLengthValue)}
          </span>
        )}
        <input
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
        <input
          {...register('imagem', { required: true, minLength: minLengthValue })}
          className={errors.imagem && styles.inputErro}
          alt="URL da imagem do produto"
          placeholder="URL da imagem do produto"
          type="text"
        />
        {errors.imagem && (
          <span role="alert" className={styles.mensagemErro}>
            {MensagensDeErroForm(errors.imagem.type, minLengthValue)}
          </span>
        )}
        <select
          {...register('categoria', { required: true })}
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
        <input
          {...register('preco', { required: true, min: 1 })}
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
