import { makeVar } from '@apollo/client';
import Category from 'types/Category';

export const categoriesVar = makeVar<Category[]>([]);
