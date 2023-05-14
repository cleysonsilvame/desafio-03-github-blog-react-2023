import { Navigate, useParams } from 'react-router-dom'

import { PostContent } from '../../components/PostContent'
import { PostHeader } from '../../components/PostHeader'
import { useGetIssueByNumber } from '../../hooks/queries/use-get-issues-by-number'

export function Post() {
  const { number } = useParams<{ number: string }>()

  const { data } = useGetIssueByNumber(Number(number))

  if (Number.isNaN(Number(number))) {
    return <Navigate to="/" />
  }

  return (
    <>
      <PostHeader post={data} />

      <PostContent>{data?.body}</PostContent>
    </>
  )
}
