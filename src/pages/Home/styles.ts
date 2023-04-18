import styled from 'styled-components'

export const HomeContainer = styled.div``

export const PersonCard = styled.div`
  height: 212px;
  padding: 2rem;
  padding-left: 2.5rem;

  margin-top: -5rem;

  background: ${({ theme }) => theme.colors.profile};
  box-shadow: 0 0.125rem 1.75rem rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;

  display: flex;

  > img {
    height: 100%;
    border-radius: 8px;
  }
`
export const ContentCard = styled.div`
`
