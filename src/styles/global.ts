import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
  :root {
    --toastify-color-dark: ${({ theme }) => theme.colors.input};
    --toastify-color-error: #bc5146;
    --toastify-text-color-dark: ${(props) => props.theme.colors.title};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue};
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;

    ::-webkit-scrollbar {
      width: 0.5rem;
    }
      
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.border};
      
    }
    
    ::-webkit-scrollbar-thumb {
      border-top-left-radius: 50rem;
      border-bottom-left-radius: 50rem;
      background-color: ${({ theme }) => theme.colors.label};
      outline: 1px solid ${({ theme }) => theme.colors.border};
    }
  }

  body, input, textarea, button {
    font: 400 ${(props) => props.theme.font.sizes.md} / 160% Nunito, sans-serif;
  }
`
