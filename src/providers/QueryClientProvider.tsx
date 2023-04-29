import {
  QueryClient,
  QueryClientProvider as TQueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode } from 'react'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
})

export function QueryClientProvier({ children }: { children: ReactNode }) {
  return (
    <TQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </TQueryClientProvider>
  )
}
