import styled from 'styled-components'

export const DefaultContainer = styled.div`
  height: 100vh;
`

export const InnerContainer = styled.div`
  max-width: calc(54rem + 3rem);
  height: calc(100% - 18.5rem);

  margin: 0 auto;
  padding: 0 3rem 3rem;

  position: relative;
  z-index: 1000;
`
