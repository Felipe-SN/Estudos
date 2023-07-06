import { useMutation, useQuery } from '@tanstack/react-query';
import { getAll, remove } from 'Services/apiServices';
import { AxiosError } from 'axios';
import { RequestProps } from 'types/RequestProps';
import { queryClient as client } from '../client';

export default function useRequestQuery() {
  const { ...queryInfo } = useQuery<RequestProps[] | null, AxiosError>(['getUserRequests'], <T>() =>
    getAll<T>('pedidos')
  );

  const deleteRequest = useMutation({
    mutationFn: (id: number) => remove('pedidos', id),
    onMutate: async (id: number) => {
      await client.cancelQueries(['getUserRequests']);
      const previousRequests = client.getQueryData<RequestProps[]>(['getUserRequests']);

      if (previousRequests)
        client.setQueryData<RequestProps[]>(['getUserRequests'], [...previousRequests.filter(item => item.id !== id)]);

      return { previousRequests };
    },
    onError: ({ context }) => {
      if (context?.previousRequests) client.setQueryData<RequestProps[]>(['getUserRequests'], context.previousRequests);
    },
    onSettled: () => {
      client.invalidateQueries(['getUserRequests']);
    },
  });

  return { queryInfo, deleteRequest };
}
