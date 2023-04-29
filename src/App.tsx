import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css'

import { Route, Routes } from 'react-router-dom'

import { Default } from './layouts/Default'
import { Home } from './pages/Home'
import { Providers } from './providers'

export function App() {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Providers>
  )
}
