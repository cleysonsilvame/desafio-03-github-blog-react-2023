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
  height: 168px;
  width: 100%;
  display: block;
  box-shadow: 0 0.125rem 1.75rem rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
`

export const PostCard = styled.div`
  height: 168px;
  padding: 2rem;
  padding-left: 2.5rem;

  background: ${({ theme }) => theme.colors.profile};
  box-shadow: 0 0.125rem 1.75rem rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > img {
    height: 100%;
    border-radius: 8px;
  }
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;

  > a,
  button {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    background-color: transparent;
    border: none;
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
      cursor: pointer;
    }

    > svg {
      -webkit-text-stroke: 4px white;
    }
  }
`

export const ContentCard = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  > h2 {
    color: ${({ theme }) => theme.colors.title};
    font-size: ${({ theme }) => theme.font.sizes['2xl']};
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

      color: ${({ theme }) => theme.colors.span};
    }
  }
`
