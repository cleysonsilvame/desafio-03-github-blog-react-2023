import { ContentCard, PersonCard } from './styles'

export function Home() {
  return (
    <>
      <PersonCard>
        <img
          src="https://github.com/cleysonsilvame.png"
          alt="Imagem do perfil do usuário do github: cleysonsilvame"
        />
        <ContentCard>
          <h2>Cleyson Silva</h2>
          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        </ContentCard>
      </PersonCard>
    </>
  )
}
