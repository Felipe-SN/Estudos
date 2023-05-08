import { useRecoilState } from 'recoil';
import { isLoggedState } from 'state/atom';

export default function useIsLoggedState() {
  const [isLogged, setIsLogged] = useRecoilState(isLoggedState);

  return { isLogged, setIsLogged };
}
