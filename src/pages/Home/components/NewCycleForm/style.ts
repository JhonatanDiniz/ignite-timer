import { styled } from 'styled-components'

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
