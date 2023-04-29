import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.5rem;
  margin-bottom: 0.75rem;

  > h3 {
    font-weight: 700;
    font-size: 18px;

    color: ${(props) => props.theme.colors.subtitle};
  }

  > span {
    font-weight: 400;
    font-size: 14px;

    color: ${(props) => props.theme.colors.span};
  }
`
export const Input = styled.input`
  width: 100%;

  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 6px;

  background: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 3rem;
`
