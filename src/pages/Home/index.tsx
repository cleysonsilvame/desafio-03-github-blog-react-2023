import { Person } from '../../components/Person'
import { PostCard } from '../../components/PostCard'
import { SearchPublicationsInput } from '../../components/SearchPublicationsInput'
import { useGetUser } from '../../hooks/queries/use-get-user'
import { PostsContainer } from './styles'

export function Home() {
  const { data } = useGetUser()

  return (
    <>
      <Person user={data} />

      <SearchPublicationsInput />

      <PostsContainer>
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </>
  )
}
