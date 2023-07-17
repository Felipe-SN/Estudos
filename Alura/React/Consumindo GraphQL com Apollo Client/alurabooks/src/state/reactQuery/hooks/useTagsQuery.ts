import { AxiosError } from 'axios';
import { getAll } from 'Services/apiServices';
import { useQuery } from '@tanstack/react-query';
import sortByLength from 'helpers/sortByLength';

export default function useTagsQuery() {
  const tagsInfo = useQuery<Tag[] | null, AxiosError>(['queryTags'], ({ signal }) => getAll('tags', { signal }), {
    select: data => {
      if (data) return sortByLength(data, 'nome');
      return null;
    },
  });

  if (tagsInfo.data) return { ...tagsInfo };

  return { ...tagsInfo, data: null };
}

type Tag = { id: number; nome: string };
