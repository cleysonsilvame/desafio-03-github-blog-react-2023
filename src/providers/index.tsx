import { ReactNode } from 'react'

import { GlobalComponents } from './GlobalComponents'
import { QueryClientProvier } from './QueryClientProvider'
import { RouterProvider } from './RouterProvider'
import { ThemeProvider } from './ThemeProvider'

const providers = [
  ThemeProvider,
  QueryClientProvier,
  RouterProvider,
  GlobalComponents,
]

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>
      }, children)}
    </>
  )
}
