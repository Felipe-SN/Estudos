import { colors } from 'components/UI/variables';
import useModalOpenState from 'state/hooks/useModalOpenState';
import styled from 'styled-components';
import images from 'data/images.json';
import icons from 'data/icons.json';

export default function Modal({ title, children }: ModalProps) {
  const { modalIsOpen, setModalIsOpen } = useModalOpenState();

  const toClose = () => setModalIsOpen(false);

  if (modalIsOpen)
    return (
      <>
        <WindowBlur onClick={toClose} />
        <ModalWindow>
          <SideImg />
          <ContentSide>
            <ModalTitle>{title}</ModalTitle>
            <ButtonClose onClick={toClose} />
            <FormWrapper>{children}</FormWrapper>
          </ContentSide>
        </ModalWindow>
      </>
    );

  return <></>;
}

const WindowBlur = styled.div`
  background-color: ${colors.cinzaFundoModal};
  cursor: pointer;
  height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: 9;
`;

const ModalWindow = styled.div`
  align-items: center;
  background-color: ${colors.branca};
  border-radius: 1.5rem;
  box-shadow: 0.25rem 0.25rem 1.5rem -0.25rem ${colors.sombraFiltro};
  box-sizing: border-box;
  display: grid;
  grid-column-gap: 3.5rem;
  grid-template-areas: 'sideImg contentSide';
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: 100%;
  height: fit-content;
  justify-content: center;
  left: 50%;
  padding-bottom: 3.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 3.5rem;
  position: fixed;
  top: 50%;
  translate: -50% -50%;
  width: fit-content;
  z-index: 10;
`;

const SideImg = styled.span`
  background-image: url(${images.ModalSideImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  grid-area: sideImg;
  width: 20rem;
  height: 20rem;
`;

const ContentSide = styled.div`
  display: grid;
  grid-area: contentSide;
  grid-row-gap: 2rem;
  grid-template-areas: 'title xButton' 'children children';
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, min-content);
`;

const FormWrapper = styled.div`
  display: grid;
  grid-area: children;
`;

const ModalTitle = styled.h2`
  color: ${colors.mostarda};
  grid-area: title;
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: 0rem;
  text-transform: uppercase;
`;

const ButtonClose = styled.button`
  align-items: center;
  align-self: start;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  grid-area: xButton;
  height: 2rem;
  justify-content: center;
  justify-self: end;
  padding: 0;
  text-transform: uppercase;
  width: 2rem;

  ::before {
    content: url(${icons.close});
    font-size: 2rem;
  }
`;

type ModalProps = {
  children: React.ReactNode;
  title: string;
};
