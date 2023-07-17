import { colors } from 'components/UI/variables';
import Button from 'components/Button';
import styled from 'styled-components';
import useModalOpenState from 'state/recoil/hooks/useModalOpenState';

export default function SingUp() {
  const { setModalIsOpen, setModalSingInIsOpen } = useModalOpenState();

  const handleSingInView = (isSingIn: boolean) => {
    setModalSingInIsOpen(isSingIn);
    setModalIsOpen(true);
  };

  return (
    <PositionDiv>
      <TextDiv>
        <h4>Já possui uma conta?</h4>
        <p>Com um conta você pode criar sua própria estante de livros e e-books.</p>
      </TextDiv>
      <ButtonsDiv>
        <Button $variantType="Secondary" onClick={() => handleSingInView(false)} $text="Criar conta" />
        <Button onClick={() => handleSingInView(true)} $text="Fazer login" />
      </ButtonsDiv>
    </PositionDiv>
  );
}

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
