import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 16.25rem;

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

  > h1 {
    font-size: ${(props) => props.theme.font.sizes.xl};
    font-weight: 700;
    line-height: 32px;
    color: ${(props) => props.theme.colors.title};
  }
  > span {
    font-size: 14px;
    color: ${(props) => props.theme.colors.span};
  }
`
