import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 16.25rem;
  max-height: 16.25rem;
  text-decoration: none;
  color: inherit;

  padding: 2rem;
  gap: 1.5rem;

  border-radius: 10px;
  background: ${(props) => props.theme.colors.post};

  > p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    text-overflow: ellipsis;
  }
`
export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;

  > h2 {
    font-size: ${(props) => props.theme.font.sizes.xl};
    font-weight: 700;
    line-height: 32px;
    color: ${(props) => props.theme.colors.title};

    height: 3.6rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
  }
  > span {
    margin-left: auto;
    font-size: 14px;
    color: ${(props) => props.theme.colors.span};
  }
`
