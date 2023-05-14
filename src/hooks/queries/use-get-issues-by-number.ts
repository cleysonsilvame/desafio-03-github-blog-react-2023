import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { GITHUB_ISSUES } from '../../config'
import { getIssueByNumber } from '../../services/github'

export const GET_ISSUE_BY_NUMBER = ['get-issue']

export function useGetIssueByNumber(number: number) {
  const query = useQuery({
    queryKey: [...GET_ISSUE_BY_NUMBER, number],
    queryFn: ({ signal }) => {
      return getIssueByNumber(
        GITHUB_ISSUES.username,
        GITHUB_ISSUES.repo,
        number,
        { signal },
      )
    },
    onError: (err: Error) => {
      toast.error(err.message)
    },
    enabled: !Number.isNaN(Number(number)),
  })

  return query
}
