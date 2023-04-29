import { ReactNode } from 'react'
import { ThemeProvider as SThemeProvider } from 'styled-components'

import { defaultTheme } from '../styles/theme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <SThemeProvider theme={defaultTheme}>{children}</SThemeProvider>
}
