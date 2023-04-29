import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa'
import { RiShareBoxLine } from 'react-icons/ri'

import { GetUserResponse } from '../../services/github'
import { ContentCard, Loading, PersonCard } from './styles'

interface PersonProps {
  user?: GetUserResponse
}

export function Person({ user }: PersonProps) {
  if (!user) return <Loading />

  return (
    <PersonCard>
      <img
        src={user.avatar_url}
        alt={`Imagem do perfil do usuário do github: ${user.login}`}
      />
      <ContentCard>
        <div>
          <h2>{user.name}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            <span>GitHub</span> <RiShareBoxLine />
          </a>
        </div>
        <p>{user.bio}</p>

        <div>
          <span>
            <FaGithub />
            {user.login}
          </span>
          <span>
            <FaBuilding />
            {user.company}
          </span>
          <span>
            <FaUserFriends />
            {user.following} seguidores
          </span>
        </div>
      </ContentCard>
    </PersonCard>
  )
}
