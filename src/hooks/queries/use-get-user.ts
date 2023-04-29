import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { getUser } from '../../services/github'

export const GET_USER_KEY = ['user']

export function useGetUser() {
  const query = useQuery({
    queryKey: GET_USER_KEY,
    queryFn: ({ signal }) => {
      return getUser('cleysonsilvame', { signal })
    },
    onError: (err: Error) => {
      toast.error(err.message)
    },
  })

  return query
}
