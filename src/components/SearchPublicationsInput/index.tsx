import { Header, Input } from './styles'

export function SearchPublicationsInput() {
  return (
    <div>
      <Header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </Header>

      <Input type="text" placeholder="Buscar conteúdo" />
    </div>
  )
}
