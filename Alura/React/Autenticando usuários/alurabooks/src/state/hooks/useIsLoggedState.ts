import { useRecoilState } from 'recoil';
import { isLoggedState } from 'state/atom';

const useIsLoggedState = () => {
  const [isLogged, setIsLogged] = useRecoilState(isLoggedState);

  return { isLogged, setIsLogged };
};

export default useIsLoggedState;
