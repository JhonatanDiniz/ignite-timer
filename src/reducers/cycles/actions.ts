import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPTED_CURRENT_CYCLE = 'INTERRUPTED_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_FINISHED = 'MARK_CURRENT_CYCLE_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCycleCurrentFinished() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_FINISHED,
  }
}

export function interruptedCurrentCycle() {
  return {
    type: ActionTypes.INTERRUPTED_CURRENT_CYCLE,
  }
}
