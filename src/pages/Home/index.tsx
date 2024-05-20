import { Play } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountDownContainer,
  DurationInput,
  FormContainer,
  HomeContainer,
  InitCountDownContainer,
  Separator,
  TaskInput,
} from './style'
import { useState } from 'react'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(5, 'Informe a tarefa'),
  duration: zod.number().min(5).max(60),
})

// interface newCycleFormData {
//   task: string
//   duration: number
// }

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const { register, handleSubmit, watch, reset } = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      duration: 0,
    },
  })

  function handleCreateNewCycle(data: newCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime),
      task: data.task,
      minutesAmount: data.duration,
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)

    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  console.log(activeCycle)

  const task = watch('task')
  const isSubmitDisabled = !(task && task.length >= 5)

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="NameProject">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="NameProject"
            placeholder="Dê nome para o seu projeto"
            list="task-sugestions"
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
            {...register('duration', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <InitCountDownContainer disabled={isSubmitDisabled} type="submit">
          <Play />
          Começar
        </InitCountDownContainer>
      </form>
    </HomeContainer>
  )
}
