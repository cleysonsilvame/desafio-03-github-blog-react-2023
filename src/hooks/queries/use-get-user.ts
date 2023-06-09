import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { GITHUB_BLOG } from '../../config'
import { getUser } from '../../services/github'

export const GET_USER_KEY = ['user']

export function useGetUser() {
  const query = useQuery({
    queryKey: GET_USER_KEY,
    queryFn: ({ signal }) => {
      return getUser(GITHUB_BLOG.username, { signal })
    },
    onError: (err: Error) => {
      toast.error(err.message)
    },
  })

  return query
}
