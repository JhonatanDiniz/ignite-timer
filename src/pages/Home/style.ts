import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountDownContainer = styled.button`
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-300']};

  &:disabled {
    background: ${(props) => props.theme['green-700']};
    cursor: not-allowed;
  }
`

export const InitCountDownContainer = styled(BaseCountDownContainer)`
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-300']};
  }
`

export const StopCountDownContainer = styled(BaseCountDownContainer)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-300']};
  }
`
