import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { DefaultContainer, InnerContainer } from './styles'

export function Default() {
  return (
    <DefaultContainer>
      <Header />

      <InnerContainer>
        <Outlet />
      </InnerContainer>
    </DefaultContainer>
  )
}
