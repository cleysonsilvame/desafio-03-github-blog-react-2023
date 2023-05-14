import { useState } from 'react'

import { Person } from '../../components/Person'
import { PostCard } from '../../components/PostCard'
import { SearchPublicationsInput } from '../../components/SearchPublicationsInput'
import { useGetUser } from '../../hooks/queries/use-get-user'
import { useSearchIssues } from '../../hooks/queries/use-search-issues'
import { PostsContainer } from './styles'

export function Home() {
  const [search, setSearch] = useState('')

  const { data: user } = useGetUser()
  const { data: issues } = useSearchIssues(search)

  return (
    <>
      <Person user={user} />

      <SearchPublicationsInput onChange={setSearch} />

      <PostsContainer>
        {issues?.items.map((item) => (
          <PostCard key={item.id} post={item} />
        ))}
      </PostsContainer>
    </>
  )
}
