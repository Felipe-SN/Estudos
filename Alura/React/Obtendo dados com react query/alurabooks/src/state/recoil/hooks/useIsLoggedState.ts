import { useRecoilState } from 'recoil';
import { isLoggedState } from 'state/recoil/atom';

export default function useIsLoggedState() {
  const [isLogged, setIsLogged] = useRecoilState(isLoggedState);

  return { isLogged, setIsLogged };
}
