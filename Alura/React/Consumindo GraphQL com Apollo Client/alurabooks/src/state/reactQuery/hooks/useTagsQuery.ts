import { AxiosError } from 'axios';
import { getAll } from 'Services/apiServices';
import { useQuery } from '@tanstack/react-query';

export default function useTagsQuery() {
  const { data, isLoading, error } = useQuery<TagProps[] | null, AxiosError>(['queryTags'], ({ signal }) =>
    getAll('tags', { signal })
  );

  if (data) return { data, isLoading, error };

  return { data: null, isLoading, error };
}

type TagProps = { id: number; name: string };
