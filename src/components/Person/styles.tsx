import Skeleton from 'react-loading-skeleton'
import styled, { useTheme } from 'styled-components'

const CustomSkeleton = ({ className }: { className?: string }) => {
  const theme = useTheme()

  return (
    <Skeleton
      baseColor={theme.colors.profile}
      highlightColor={theme.colors.background}
      className={className}
    />
  )
}

export const Loading = styled(CustomSkeleton)`
  height: 212px;
  width: 100%;
  display: block;
  box-shadow: 0 0.125rem 1.75rem rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
`

export const PersonCard = styled.div`
  height: 212px;
  padding: 2rem;
  padding-left: 2.5rem;

  background: ${({ theme }) => theme.colors.profile};
  box-shadow: 0 0.125rem 1.75rem rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;

  display: flex;
  gap: 2rem;

  > img {
    height: 100%;
    border-radius: 8px;
  }
`
export const ContentCard = styled.div`
  flex: 1;
  padding-block: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  > div:first-child {
    display: flex;
    justify-content: space-between;

    > h2 {
      color: ${({ theme }) => theme.colors.title};
      font-size: ${({ theme }) => theme.font.sizes['2xl']};
    }

    > a {
      display: flex;
      align-items: center;

      gap: 0.5rem;

      color: ${({ theme }) => theme.colors.blue};
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.75rem;

      :visited {
        color: ${({ theme }) => theme.colors.blue};
      }

      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
        margin-bottom: -2px;
      }

      > svg {
        -webkit-text-stroke: 4px white;
      }
    }
  }

  > div:last-child {
    margin-top: auto;

    display: flex;
    gap: 1.5rem;

    > span {
      line-height: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`
