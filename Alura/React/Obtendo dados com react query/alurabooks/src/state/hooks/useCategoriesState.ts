import { useRecoilState } from 'recoil';
import { categoriesState } from 'state/atom';

export default function useCategoriesState() {
  const [categories, setCategories] = useRecoilState(categoriesState);

  return { categories, setCategories };
}
