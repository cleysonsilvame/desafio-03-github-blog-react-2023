import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: relative;
  overflow: hidden;

  width: 100%;
`

export const InnerContainer = styled.div`
  height: 18.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  background-color: ${({ theme }) => theme.colors.profile};

  > img {
    z-index: 100;
  }

  > img:first-child {
    height: 11.75rem;
    min-width: 0;
  }

  > img:nth-child(2) {
    height: 6.125rem;
    margin-top: -5rem;
  }

  > img:last-child {
    height: 14.75rem;
    min-width: 0;
  }
`

export const LeftEllipseEffect = styled.div`
  width: 14.75rem;
  height: 14.75rem;

  position: absolute;
  left: -130px;
  top: -96px;

  background: #14589c;
  filter: blur(12.5rem);

  border-radius: 99999px;
`

export const RightEllipseEffect = styled.div`
  width: 9.6875rem;
  height: 9.6875rem;

  position: absolute;
  right: -0.9375rem;
  top: -3.25rem;

  background: #14589c;
  filter: blur(12.5rem);

  border-radius: 99999px;
`

export const CenterEffect = styled.div`
  width: 891px;
  height: 52px;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  background: #14589c;
  filter: blur(6.625rem);

  margin: 0 auto;
`
