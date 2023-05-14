import { formatDateWithSuffix } from '../../utils/formatDates'
import { HeaderContainer, PostContainer } from './styles'

interface PostCardProps {
  post: {
    number: number
    title: string
    created_at: string
    body: string
  }
}

export function PostCard({ post }: PostCardProps) {
  return (
    <PostContainer to={`/post/${post.number}`}>
      <HeaderContainer>
        <h2>{post?.title}</h2>
        <span title={new Date(post.created_at).toLocaleString()}>
          {formatDateWithSuffix(post.created_at)}
        </span>
      </HeaderContainer>

      <p>{post?.body}</p>
    </PostContainer>
  )
}
