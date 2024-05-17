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

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  flex-wrap: wrap;
`

const DefaultInput = styled.input`
  background-color: transparent;
  border: 0;
  height: 2.5rem;
  font-size: 1.125rem;
  color: ${(props) => props.theme['gray-500']};
  border-bottom: 3px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  padding: 0 0.5rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(DefaultInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const DurationInput = styled(DefaultInput)`
  width: 4rem;
`

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2.5rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  display: flex;
  justify-content: center;
`

export const InitCountDownContainer = styled.button`
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-300']};

  &:disabled {
    background: ${(props) => props.theme['green-700']};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-300']};
  }
`
