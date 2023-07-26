import { ApolloError, makeVar } from '@apollo/client';
import Category from 'types/Category';

export const categoriesVar = makeVar<{ data: Category[]; loading: boolean; error: ApolloError | undefined }>({
  data: [],
  loading: true,
  error: undefined,
});
