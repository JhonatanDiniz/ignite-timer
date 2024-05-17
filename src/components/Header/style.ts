import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 2.5rem auto;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme['gray-300']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: 1s;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
