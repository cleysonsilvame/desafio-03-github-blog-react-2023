import styled from 'styled-components'

export const ContentContainer = styled.div`
  padding: 1rem 0.4rem;
  width: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.subtitle};

    &:first-child {
      margin-top: 0;
    }
  }

  hr,
  p {
    margin-bottom: 1rem;
  }

  p {
    font-weight: 400;
    line-height: 1.6;
    font-size: 1rem;
    text-align: justify;
  }

  strong {
    font-weight: 400;
    line-height: 1.6;
    font-size: 1rem;
  }

  a {
    font-weight: 400;
    line-height: 1.6;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.blue};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  ul {
    margin-left: 2rem;
  }
`
