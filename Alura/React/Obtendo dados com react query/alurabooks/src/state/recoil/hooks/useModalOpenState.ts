import { useRecoilState } from 'recoil';
import { modalOpenState, modalSingInOpenState } from 'state/recoil/atom';

export default function useModalOpenState() {
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalOpenState);
  const [modalSingInIsOpen, setModalSingInIsOpen] = useRecoilState(modalSingInOpenState);
  return {
    modalIsOpen,
    setModalIsOpen,
    modalSingInIsOpen,
    setModalSingInIsOpen,
  };
}
