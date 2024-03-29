import Button from 'components/Button';
import { colors } from 'components/UI/variables';
import useModalOpenState from 'state/hooks/useModalOpenState';
import styled from 'styled-components';

const PositionDiv = styled.div`
  align-items: center;
  display: grid;
  column-gap: 3.5rem;
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  letter-spacing: 0rem;
  color: ${colors.branca};

  > h4 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.25rem;
  }

  > p {
    max-width: 19rem;
    font-weight: 300;
    line-height: 1.5rem;
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SingUp = () => {
  const { setModalIsOpen, setModalSingInIsOpen } = useModalOpenState();

  const openModal = (isSingIn: boolean) => {
    setModalSingInIsOpen(isSingIn);
    setModalIsOpen(true);
  };

  return (
    <PositionDiv>
      <TextDiv>
        <h4>Já possui uma conta?</h4>
        <p>
          Com um conta você pode criar sua própria estante de livros e e-books.
        </p>
      </TextDiv>
      <ButtonsDiv>
        <Button variantType="Secondary" onClick={() => openModal(false)}>
          Criar conta
        </Button>
        <Button onClick={() => openModal(true)}>Fazer login</Button>
      </ButtonsDiv>
    </PositionDiv>
  );
};

export default SingUp;
