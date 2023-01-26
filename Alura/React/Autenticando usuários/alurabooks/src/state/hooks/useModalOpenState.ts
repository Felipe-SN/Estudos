import { useRecoilState } from 'recoil';
import { modalOpenState, modalSingInOpenState } from 'state/atom';

const useModalOpenState = () => {
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalOpenState);
  const [modalSingInIsOpen, setModalSingInIsOpen] =
    useRecoilState(modalSingInOpenState);
  return {
    modalIsOpen,
    setModalIsOpen,
    modalSingInIsOpen,
    setModalSingInIsOpen,
  };
};

export default useModalOpenState;
