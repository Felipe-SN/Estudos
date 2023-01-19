import { useRecoilState } from 'recoil';
import { ModalOpenState } from 'state/atom';

const useModalOpenState = () => {
  const [modalIsOpen, setModalIsOpen] = useRecoilState(ModalOpenState);
  return { modalIsOpen, setModalIsOpen };
};

export default useModalOpenState;
