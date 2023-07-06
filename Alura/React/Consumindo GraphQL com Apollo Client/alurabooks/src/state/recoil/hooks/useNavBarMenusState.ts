import { useRecoilState } from 'recoil';
import { navCategoryListState, navUserMenuState } from 'state/recoil/atom';

export default function useNavBarMenusState() {
  const [categoryListOpen, setCategoryListOpen] = useRecoilState(navCategoryListState);
  const [userMenuOpen, setUserMenuOpen] = useRecoilState(navUserMenuState);

  return {
    categoryListOpen,
    userMenuOpen,
    setCategoryListOpen,
    setUserMenuOpen,
  };
}
