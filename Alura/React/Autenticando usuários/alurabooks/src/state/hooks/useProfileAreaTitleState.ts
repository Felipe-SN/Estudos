import { useRecoilState } from 'recoil';
import { profileAreaTitleState, profileMenuTitleState } from 'state/atom';

const useProfileAreaTitleState = () => {
  const [profileAreaTitle, setProfileAreaTitle] = useRecoilState(
    profileAreaTitleState
  );
  const [profileMenuTitle, setProfileMenuTitle] = useRecoilState(
    profileMenuTitleState
  );

  return {
    profileAreaTitle,
    profileMenuTitle,
    setProfileAreaTitle,
    setProfileMenuTitle,
  };
};

export default useProfileAreaTitleState;
