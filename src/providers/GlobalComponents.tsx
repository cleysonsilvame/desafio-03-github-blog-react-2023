import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

import { GlobalStyle } from '../styles/global'

export function GlobalComponents({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ToastContainer theme="dark" />
      <GlobalStyle />
    </>
  )
}
