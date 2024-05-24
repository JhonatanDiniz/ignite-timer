import { useFormContext } from 'react-hook-form'
import { DurationInput, FormContainer, TaskInput } from './style'
import { useContext } from 'react'
import { CyclesContext } from '../../../../context/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="NameProject">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="NameProject"
        placeholder="Dê nome para o seu projeto"
        list="task-sugestions"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-sugestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>

      <label htmlFor="Duration">durante</label>
      <DurationInput
        type="number"
        id="Duration"
        step={5}
        max={60}
        min={5}
        disabled={!!activeCycle}
        {...register('duration', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
