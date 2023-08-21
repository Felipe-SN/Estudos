import { colors } from 'components/UI/variables';
import icons from 'data/icons.json';
import images from 'data/images.json';
import styled from 'styled-components';
import useModalOpenState from 'state/recoil/hooks/useModalOpenState';

export default function Modal({ ...props }: ModalProps) {
  const { title, children, className } = props;
  const { modalIsOpen, setModalIsOpen } = useModalOpenState();

  const toClose = () => setModalIsOpen(false);

  if (modalIsOpen)
    return (
      <>
        <WindowBlur onClick={toClose} />
        <ModalWindow className={className}>
          <SideImg />
          <ContentSide>
            <ModalTitle>{title}</ModalTitle>
            <ButtonClose onClick={toClose} />
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </ContentSide>
        </ModalWindow>
      </>
    );

  return <></>;
}

const WindowBlur = styled.div`
  background-color: ${colors.cinzaFundoModal};
  backdrop-filter: blur(0.63rem);
  cursor: pointer;
  height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: 9;
`;

const ModalWindow = styled.div`
  background-color: ${colors.branca};
  border-radius: 1.5rem;
  box-shadow: 0.25rem 0.25rem 1.5rem -0.25rem ${colors.sombraFiltro};
  display: grid;
  gap: 1.5rem;
  grid-template-areas: 'sideImg' 'contentSide';
  padding: 1.5rem;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  @media screen and (min-width: 1024px) {
    gap: 3.5rem;
    grid-template-areas: 'sideImg contentSide';
  }
`;

const SideImg = styled.span`
  background-image: url(${images.ModalSideImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  grid-area: sideImg;
  width: 14.1875rem;
  height: 14.1875rem;
  justify-self: center;

  @media screen and (min-width: 1024px) {
    width: 20rem;
    height: 20rem;
  }
`;

const ContentSide = styled.div`
  display: grid;
  grid-area: contentSide;
  row-gap: 1.5rem;
  grid-template-areas: 'title x-button' 'children children';

  @media screen and (min-width: 1024px) {
    row-gap: 2rem;
  }
`;

const ChildrenWrapper = styled.div`
  display: grid;
  grid-area: children;
`;

const ModalTitle = styled.h2`
  color: ${colors.mostarda};
  font-weight: 700;
  grid-area: title;
  text-transform: uppercase;
  font-size: 1.2rem;

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  grid-area: x-button;
  justify-self: end;
  padding: 0;

  &::before {
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${icons.close});
    width: 1.5rem;
    height: 1.5rem;

    @media screen and (min-width: 1024px) {
      width: 2rem;
      height: 2rem;
    }
  }
`;

type ModalProps = {
  children: React.ReactNode;
  title: string;
} & React.ComponentPropsWithoutRef<React.JSXElementConstructor<React.ObjectHTMLAttributes<HTMLDivElement>>>;
