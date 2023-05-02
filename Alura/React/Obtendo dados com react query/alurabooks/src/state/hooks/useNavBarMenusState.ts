import { useRecoilState } from 'recoil';
import { navCategoryListState, navUserMenuState } from 'state/atom';

const useNavBarMenusState = () => {
  const [categoryListOpen, setCategoryListOpen] =
    useRecoilState(navCategoryListState);
  const [userMenuOpen, setUserMenuOpen] = useRecoilState(navUserMenuState);

  return {
    categoryListOpen,
    userMenuOpen,
    setCategoryListOpen,
    setUserMenuOpen,
  };
};

export default useNavBarMenusState;
